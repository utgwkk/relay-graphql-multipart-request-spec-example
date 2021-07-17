/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FileList_files = {
    readonly files: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly filename: string;
                readonly length: number;
            } | null;
        } | null> | null;
    } | null;
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
      "concreteType": "FileConnection",
      "kind": "LinkedField",
      "name": "files",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FileEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "File",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '400543afd65a2fdcef57aafebf315b9d';
export default node;
