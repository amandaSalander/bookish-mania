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

console.log('bookType '+bookType);
console.log('book '+book);

export default {
  addBook:{
    type:bookType,
    args: {
      isbn:{
        name:'isbn',
        type:new GraphQLNonNull(GraphQLString)
      },
      title:{
        name:'title',
        type: new GraphQLNonNull(GraphQLString)
      },
      description: {
        name:'description',
        type: new GraphQLNonNull(GraphQLString)
      },
      releaseDate: {
        name:'releaseDate',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: book.addBook
  },
  updateBook:{
    type:bookType,
    args: {
      isbn:{
        name:'isbn',
        type:new GraphQLNonNull(GraphQLString)
      },
      title:{
        name:'title',
        type: new GraphQLNonNull(GraphQLString)
      },
      description: {
        name:'description',
        type: new GraphQLNonNull(GraphQLString)
      },
      releaseDate: {
        name:'releaseDate',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: book.updateBook
  }
};