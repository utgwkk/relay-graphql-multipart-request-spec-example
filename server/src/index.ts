import express from "express";
import { graphqlHTTP } from "express-graphql";
import { graphqlUploadExpress } from "graphql-upload";
import path from "path";

import { schema } from "./graphql";

const app = express();
app.use(
  "/api/graphql",
  graphqlUploadExpress(),
  graphqlHTTP({ schema, graphiql: true })
);

app.get("/api/download/:filename", (req, res) => {
  res.download(path.join(__dirname, "../uploads/", req.params.filename));
});

app.listen(4000);
