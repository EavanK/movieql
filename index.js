import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers.js";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

const PORT = process.env.PORT || 4000;

server.start(PORT, () =>
  console.log("Graphql Server Running on http://localhost:4000")
);
