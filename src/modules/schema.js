import userResolver from "./users/resolvers/index";
import { postResolver } from "./posts/resolvers/index";
import { merge } from "lodash";
import { makeExecutableSchema } from "apollo-server-express";
import { readSchemaUtil } from "../utils/sharedUtil"

const userTypes = readSchemaUtil("users");
const postTypes = readSchemaUtil("posts");

const Root = `
    # The empty queries and mutations are necessary because graphql-js 
    # cannot have empty root types and we only extend these types later on
    scalar Upload
    
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }`

export default makeExecutableSchema({
    typeDefs: [Root, userTypes, postTypes],
    resolvers: merge({}, userResolver, postResolver)
})

