import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    users: [User!]
  }
  extend type Mutation {
    signUp(name: String!): User!
  }
  type User {
    name: String!
  }
`;
