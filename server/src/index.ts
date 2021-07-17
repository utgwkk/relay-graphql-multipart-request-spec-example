import express from "express";
import { graphqlHTTP } from "express-graphql";
import { graphqlUploadExpress } from "graphql-upload";

import { schema } from "./graphql";

const app = express();
app.use(
  "/api/graphql",
  graphqlUploadExpress(),
  graphqlHTTP({ schema, graphiql: true })
);

app.listen(4000);
