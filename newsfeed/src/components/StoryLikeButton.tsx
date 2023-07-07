import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useMutation } from "react-relay";

import type { StoryLikeButtonFragment$key } from "./__generated__/StoryLikeButtonFragment.graphql";

type Props = {
    story: StoryLikeButtonFragment$key;
};

const StoryLikeButtonFragment = graphql`
  fragment StoryLikeButtonFragment on Story 
  @updatable
  {
    id
    likeCount
    doesViewerLike
  }
`;

const StoryLikeButtonMutation = graphql`
   mutation StoryLikeButtonLikeMutation(
   $id: ID!,
   $doesLike: Boolean!
   ) {
       likeStory(id: $id, doesLike: $doesLike) {
           story {
               ...StoryLikeButtonFragment
           }
       }
   }
`

export default function StoryLikeButton({ story }: Props): React.ReactElement {
    const data = useFragment<StoryLikeButtonFragment$key>(
        StoryLikeButtonFragment,
        story
    );
    const [commitMutation, isMutationInFlight] = useMutation(StoryLikeButtonMutation);
    const onLikeButtonClicked = () => {
        commitMutation({
            variables: {
                id: data.id,
                doesLike: !data.doesViewerLike
            },
            optimisticUpdater: (store) => {

                const { updatableData } = store.readUpdatableFragment_EXPERIMENTAL(StoryLikeButtonFragment, story);

                const alreadyLikes = updatableData.doesViewerLike;
                updatableData.doesViewerLike = !alreadyLikes;
                updatableData.likeCount += (alreadyLikes ? -1 : 1);

            },
        })
    };
    return (
        <div className="likeButton">
            <LikeCount count={data.likeCount} />
            <LikeButton
                doesViewerLike={data.doesViewerLike}
                onClick={onLikeButtonClicked}
                disabled={isMutationInFlight}
            />
        </div>
    );
}

function LikeCount({ count }: { count: number }) {
    return <div className="likeButton__count">{count} likes</div>;
}

function LikeButton({
    doesViewerLike,
    onClick,
    disabled,
}: {
    doesViewerLike: boolean;
    onClick: () => void;
    disabled?: boolean;
}) {
    return (
        <button
            className="likeButton__button"
            onClick={onClick}
            disabled={disabled}
        >
            <span
                className={
                    doesViewerLike
                        ? "likeButton__thumb__viewerLikes"
                        : "likeButton__thumb__viewerDoesNotLike"
                }
            >
                👍
            </span>{" "}
            <span
                className={
                    doesViewerLike
                        ? "likeButton__label__viewerLikes"
                        : "likeButton__label__viewerDoesNotLike"
                }
            >
                Like
            </span>
        </button>
    );
}
