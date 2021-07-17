/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UploadFormMutationVariables = {
    file: null;
};
export type UploadFormMutationResponse = {
    readonly uploadFile: {
        readonly filename: string;
    } | null;
};
export type UploadFormMutation = {
    readonly response: UploadFormMutationResponse;
    readonly variables: UploadFormMutationVariables;
};



/*
mutation UploadFormMutation(
  $file: Upload!
) {
  uploadFile(file: $file) {
    filename
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "file"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "file",
    "variableName": "file"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "filename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UploadFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "kind": "LinkedField",
        "name": "uploadFile",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UploadFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "kind": "LinkedField",
        "name": "uploadFile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "df79a4eca75a4fdf57547bdc1f5cf73f",
    "id": null,
    "metadata": {},
    "name": "UploadFormMutation",
    "operationKind": "mutation",
    "text": "mutation UploadFormMutation(\n  $file: Upload!\n) {\n  uploadFile(file: $file) {\n    filename\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '82d61cfa6035630923e0088dd5fdba64';
export default node;
