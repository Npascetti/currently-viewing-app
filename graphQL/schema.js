import { buildSchema } from 'graphql'

export default buildSchema(`
  input Input {
    remove: Boolean,
    ip_address: String
  }

  type Record {
    id: ID!
    time: String,
    ip_address: String
  }

  type Response {
    mutated: Boolean,
  }

  type Query {
    records(data: Boolean!): [Record!] 
  }

  type Mutation {
    mutateRecord(input: Input): Response,
  }
`)