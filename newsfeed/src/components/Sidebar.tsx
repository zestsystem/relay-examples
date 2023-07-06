import * as React from "react";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import LoadingSpinner from "./LoadingSpinner";
import ViewerProfile from "./ViewerProfile";
import ContactsList from "./ContactsList";
import { useFragment } from 'react-relay';
import { type SidebarFragment$key } from './__generated__/SidebarFragment.graphql';

const SidebarFragment = graphql`
  fragment SidebarFragment on Query {
    viewer {
      ...ViewerProfileFragment
      ...ContactsListFragment
    }
  }
`;

type Props = {
    sidebar: SidebarFragment$key;
}

export default function Sidebar({ sidebar }: Props) {
    return (
        <div className="sidebar">
            <React.Suspense fallback={<LoadingSpinner />}>
                <SidebarContents sidebar={sidebar} />
            </React.Suspense>
        </div>
    );
}

function SidebarContents({ sidebar }: Props) {
    const data = useFragment(SidebarFragment, sidebar);
    return (
        <>
            <ViewerProfile viewer={data.viewer} />
            <ContactsList viewer={data.viewer} />
        </>
    );
}
