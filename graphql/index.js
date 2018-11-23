import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'
const path = require('path')

import customTypes from './custom-types'
const typesArray = fileLoader(path.resolve(__dirname, 'types'))
typesArray.push(customTypes)
const typeDefs = mergeTypes(typesArray, { all: true })

const resolversArray = fileLoader(path.resolve(__dirname, 'resolvers'))
const resolvers = mergeResolvers(resolversArray)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
