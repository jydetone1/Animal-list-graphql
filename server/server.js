import { ApolloServer } from 'apollo-server';
import { animals, categories } from './db.js';
import { typeDefs } from './schema.js';
import { Query } from './resolvers/Query.js';
import { Animal } from './resolvers/Animal.js';
import { Category } from './resolvers/Category.js';
import { Mutation } from './resolvers/Mutation.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Animal,
    Category,
  },
  context: {
    animals,
    categories,
  },
});

server.listen().then(({ url }) => {
  console.log(` Server read at ${url}`);
});
