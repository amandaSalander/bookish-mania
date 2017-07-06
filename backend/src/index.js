// Import GraphQL and destructure for easy access
import {
  GraphQLObjectType,
  GraphQLSchema
 } from 'graphql'


 // Import mongoose to connect to MongoDB
import mongoose from 'mongoose'

// Import express-graphql an easy express integration of https://github.com/graphql/graphiql
import graphqlHTTP from 'express-graphql'




// Mutations and queries here

import bookQueries from './models/book/bookQueries'



import bookMutations from './models/book/bookMutations'


// enable cors 
const cors = require('cors');


// Setup GraphQL RootQuery
let RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Realize Root Query',
  fields: () => ({
    books:bookQueries.books
  })
})

// Setup GraphQL RootMutation
let RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Realize Root Mutations',
  fields: () => ({
    addBook:bookMutations.addBook,
    updateBook:bookMutations.updateBook 
  })
})



// Set up GraphQL Schema with our RootQuery and RootMutation
let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

// Import express server
import express from 'express'

// Connect MongoDB with Mongoose
mongoose.connect('mongodb://localhost/bookish-db')



var db = mongoose.connection;
mongoose.Promise = global.Promise;


db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function() {
    console.log('Connected to MongoDB');




  // Set up Express and integrate with our GraphQL Schema and configure to use graphiql
  var app = express()
  app.use('/graphql',cors(), graphqlHTTP({ schema: schema, graphiql: true }))
  app.listen('3000')

  var status = {
    Express: {
      "Online": true,
      "Port": 3000
    },
    "GraphiQL": {
      "url": "http://localhost:3000/graphql"
    }
  }
  console.dir(status, {depth: null, colors: true })
});
