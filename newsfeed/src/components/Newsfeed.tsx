import * as React from "react";
import Story from "./Story";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStory {
        ...StoryFragment
    }
  }
`;
export default function Newsfeed({ }) {
    const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});

    console.log("data: ", data);

    const story = data.topStory

    return (
        <div className="newsfeed">
            <Story story={story} />
        </div>
    );
}
