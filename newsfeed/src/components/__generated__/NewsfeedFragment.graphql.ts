/**
 * @generated SignedSource<<5efadce037982170ee630c8dc089fc5c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewsfeedFragment$data = {
  readonly viewer: {
    readonly newsfeedStories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"StoryFragment">;
        } | null;
      } | null> | null;
    } | null;
  } | null;
  readonly " $fragmentType": "NewsfeedFragment";
};
export type NewsfeedFragment$key = {
  readonly " $data"?: NewsfeedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewsfeedFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "viewer",
  "newsfeedStories"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 3,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./NewsfeedContentsRefetchQuery.graphql')
    }
  },
  "name": "NewsfeedFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Viewer",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": "newsfeedStories",
          "args": null,
          "concreteType": "StoriesConnection",
          "kind": "LinkedField",
          "name": "__NewsfeedFragment_newsfeedStories_connection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "StoriesConnectionEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Story",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "StoryFragment"
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "cursor",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "kind": "LinkedField",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "endCursor",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hasNextPage",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "36969115e91a58664c5e9bb9c88301b6";

export default node;
