/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FileList_files = {
    readonly files: ReadonlyArray<{
        readonly filename: string;
        readonly length: number;
    }>;
    readonly " $refType": "FileList_files";
};
export type FileList_files$data = FileList_files;
export type FileList_files$key = {
    readonly " $data"?: FileList_files$data;
    readonly " $fragmentRefs": FragmentRefs<"FileList_files">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FileList_files",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "File",
      "kind": "LinkedField",
      "name": "files",
      "plural": true,
      "selections": [
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '31c05337f4796f2ea300479bb5b45ea5';
export default node;
