import { gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    rating: Float!
    description_intro: String
    language: String!
    medium_cover_image: String!
    genres: [String]
  }

  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
`;
// # type Mutation {
// #   addMovie(name: String!, score: Int!): Movie!
// #   deleteMovie(id: Int!): Boolean!
// # }

export default typeDefs;
