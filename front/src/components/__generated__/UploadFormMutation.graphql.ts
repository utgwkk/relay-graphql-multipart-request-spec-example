/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UploadFormMutationVariables = {
    connections: Array<string>;
    file: null;
};
export type UploadFormMutationResponse = {
    readonly uploadFile: {
        readonly " $fragmentRefs": FragmentRefs<"FileItem_file">;
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
    ...FileItem_file
    id
  }
}

fragment FileItem_file on File {
  id
  filename
  length
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
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
];
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FileItem_file"
          }
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
            "name": "filename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "length",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "appendNode",
        "key": "",
        "kind": "LinkedHandle",
        "name": "uploadFile",
        "handleArgs": [
          {
            "kind": "Variable",
            "name": "connections",
            "variableName": "connections"
          },
          {
            "kind": "Literal",
            "name": "edgeTypeName",
            "value": "FileEdge"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "0b74cfa92798c4d1601708ec89b1e0e1",
    "id": null,
    "metadata": {},
    "name": "UploadFormMutation",
    "operationKind": "mutation",
    "text": "mutation UploadFormMutation(\n  $file: Upload!\n) {\n  uploadFile(file: $file) {\n    ...FileItem_file\n    id\n  }\n}\n\nfragment FileItem_file on File {\n  id\n  filename\n  length\n}\n"
  }
};
})();
(node as any).hash = '7d71736b5a75858f9a8d7c3f9c7c7339';
export default node;
