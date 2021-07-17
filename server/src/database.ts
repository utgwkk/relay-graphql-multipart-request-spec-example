let counter = 0;

export const getID = () => counter++;

export type UploadedFile = {
  id: number;
  filename: string;
  uploadedFilename: string;
  length: number;
  uploadedAt: Date;
};

type Database = {
  files: { [id: string]: UploadedFile; };
};

export const database: Database = {
  files: {},
};
