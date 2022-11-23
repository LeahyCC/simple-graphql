import { ApolloServer, gql } from 'apollo-server';
import { isConstValueNode } from 'graphql';

const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`Server ready at ${url}`);
