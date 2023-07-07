import * as React from "react";
import Story from "./Story";
import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { NewsfeedFragment$key } from "./__generated__/NewsfeedFragment.graphql";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

const NewsfeedFragment = graphql`
  fragment NewsfeedFragment on Query 
  @argumentDefinitions(
     cursor: { type: "String" }
     count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "NewsfeedContentsRefetchQuery")
  {
      viewer {
          newsfeedStories(after: $cursor, first: $count) 
          @connection(key: "NewsfeedFragment_newsfeedStories")
          {    
              edges {
                  node {
                      id
                      ...StoryFragment
                  }
              }
          }
      }
  }
`;
export default function Newsfeed({ newsfeed }: { newsfeed: NewsfeedFragment$key }) {
    const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(NewsfeedFragment, newsfeed);

    function onEndReached() {
        loadNext(3);
    }

    console.log("data: ", data);

    const storyEdges = data.viewer.newsfeedStories.edges;

    return (
        <div className="newsfeed">
            {storyEdges.map((storyEdge) => (
                <Story key={storyEdge.node.id} story={storyEdge.node} />
            ))}
            <InfiniteScrollTrigger
                onEndReached={onEndReached}
                hasNext={hasNext}
                isLoadingNext={isLoadingNext}
            />
        </div>
    );
}
