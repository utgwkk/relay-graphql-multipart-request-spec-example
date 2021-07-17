import express from "express";
import { graphqlHTTP } from "express-graphql";
import { graphqlUploadExpress } from "graphql-upload";
import path from "path";

import { database } from "./database";
import { schema } from "./graphql";

const app = express();
app.use(
  "/api/graphql",
  graphqlUploadExpress(),
  graphqlHTTP({ schema, graphiql: true })
);

app.get("/api/download/:id", (req, res) => {
  const file = database.files[req.params.id];
  if (!file) {
    res.send(404);
    return;
  }

  res.download(
    path.join(__dirname, "../uploads/", file.uploadedFilename),
    file.filename
  );
});

app.listen(4000);
