/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FileItem_file = {
    readonly id: string;
    readonly filename: string;
    readonly uploadedFilename: string;
    readonly length: number;
    readonly " $refType": "FileItem_file";
};
export type FileItem_file$data = FileItem_file;
export type FileItem_file$key = {
    readonly " $data"?: FileItem_file$data;
    readonly " $fragmentRefs": FragmentRefs<"FileItem_file">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FileItem_file",
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
      "name": "uploadedFilename",
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
  "type": "File",
  "abstractKey": null
};
(node as any).hash = 'f5091958fc8c2806c16f2d06d0ce8f08';
export default node;
