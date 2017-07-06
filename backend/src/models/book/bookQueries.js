import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import bookType from './bookType';
import book from './bookSchema';

console.log('bookType Q '+bookType);
console.log('book Q '+book);

export default {
  books: {
    type: new GraphQLList(bookType),
    resolve: book.getListOfBooks
  }
};