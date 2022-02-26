import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/schema.js";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const port = process.env.PORT || 4000;

server
  .listen({ port })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
