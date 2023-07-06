import * as React from "react";
import RelayEnvironment from "../relay/RelayEnvironment";
import Newsfeed from "./Newsfeed";
import Sidebar from "./Sidebar";
import LoadingSpinner from "./LoadingSpinner";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { AppQuery as AppQueryType } from "./__generated__/AppQuery.graphql";

const AppQuery = graphql`
query AppQuery {
  ...NewsfeedFragment
  ...SidebarFragment
}
`;

function Dashboard(): React.ReactElement {
    const data = useLazyLoadQuery<AppQueryType>(AppQuery, {});
    return (
        <div className="app">
            <Newsfeed newsfeed={data} />
            <Sidebar sidebar={data} />
        </div>
    );
}

export default function App(): React.ReactElement {
    return (
        <RelayEnvironment>
            <React.Suspense fallback={<LoadingSpinner />}>
                <Dashboard />
            </React.Suspense>
        </RelayEnvironment>
    );
}
