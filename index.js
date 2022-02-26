import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/schema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 4000;

server
  .listen({ port })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
