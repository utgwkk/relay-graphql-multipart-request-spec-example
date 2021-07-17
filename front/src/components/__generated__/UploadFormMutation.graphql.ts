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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "file",
        "variableName": "file"
      }
    ],
    "concreteType": "File",
    "kind": "LinkedField",
    "name": "uploadFile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "filename",
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
    "name": "UploadFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UploadFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "887a820ab949c02f818bc3534e34b026",
    "id": null,
    "metadata": {},
    "name": "UploadFormMutation",
    "operationKind": "mutation",
    "text": "mutation UploadFormMutation(\n  $file: Upload!\n) {\n  uploadFile(file: $file) {\n    filename\n  }\n}\n"
  }
};
})();
(node as any).hash = '82d61cfa6035630923e0088dd5fdba64';
export default node;
