/**
 * @generated SignedSource<<a689f99da66c8ff527e3c899b507f867>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type RenameTodoInput = {|
  id: string,
  text: string,
  clientMutationId?: ?string,
|};
export type RenameTodoMutation$variables = {|
  input: RenameTodoInput,
|};
export type RenameTodoMutationVariables = RenameTodoMutation$variables;
export type RenameTodoMutation$data = {|
  +renameTodo: ?{|
    +todo: {|
      +id: string,
      +text: string,
    |},
  |},
|};
export type RenameTodoMutationResponse = RenameTodoMutation$data;
export type RenameTodoMutation = {|
  variables: RenameTodoMutationVariables,
  response: RenameTodoMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RenameTodoPayload",
    "kind": "LinkedField",
    "name": "renameTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "text",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RenameTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RenameTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d970fd7dbf118794415dec7324d463e3",
    "id": null,
    "metadata": {},
    "name": "RenameTodoMutation",
    "operationKind": "mutation",
    "text": "mutation RenameTodoMutation(\n  $input: RenameTodoInput!\n) {\n  renameTodo(input: $input) {\n    todo {\n      id\n      text\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "de4aa1639055c2e6a78ee22cce29870a";

module.exports = ((node/*: any*/)/*: Mutation<
  RenameTodoMutation$variables,
  RenameTodoMutation$data,
>*/);
