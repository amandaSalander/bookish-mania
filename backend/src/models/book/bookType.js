import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'Book',
  description: 'User object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: GraphQLString
    },
    isbn: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title:{
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    releaseDate:{
      type: GraphQLString
    }
  })
});