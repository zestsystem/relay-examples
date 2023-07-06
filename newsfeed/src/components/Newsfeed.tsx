import * as React from "react";
import Story from "./Story";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { NewsfeedFragment$key } from "./__generated__/NewsfeedFragment.graphql";

const NewsfeedFragment = graphql`
  fragment NewsfeedFragment on Query {
    topStories {
      id
      ...StoryFragment
    }
  }
`;
export default function Newsfeed({ newsfeed }: { newsfeed: NewsfeedFragment$key }) {
    const data = useFragment(NewsfeedFragment, newsfeed);

    console.log("data: ", data);

    const stories = data.topStories;

    return (
        <div className="newsfeed">
            {stories.map((story) => (
                <Story key={story.id} story={story} />
            ))}
        </div>
    );
}
