
import _pick from 'lodash/pick'
import { findOne, find, create, findOneAndUpdate, findOneAndDelete } from '../operations'

// Repeat for relations
import {findOneUser} from './User'

const bridge = {
  type: 'Post',
  fieldName: 'post',
  tableName: 'post',
  fieldColumnMap: {
    'id': 'id',
    'title': 'title',
    'timeCreated': 'time_created',
    'userId': 'user_id'
  },
  pkField: 'id'
}

const resolveRefs = (row, selections) => {
  let reqRefField
  reqRefField = selections.find(f => f.kind === 'Field' && f.name.value === 'user')
    if (reqRefField) {
      // filter on parent
      let args = { id: row['userId'] }
      // Add any additional filters
      reqRefField.arguments.forEach(arg => {
        args[arg.name.value] = arg.value.value
      })
      row.user = findOneUser(args, reqRefField.selectionSet.selections)
    }

  return row
}

// The Post resolver.
export const findOnePost = (args, selections) =>
  findOne(bridge, args)  
.then(row => resolveRefs(row, selections))

export const findPosts = (args, selections) =>
  find(bridge, args)  
  .then(rows => {
    rows.forEach(
      row => resolveRefs(row, selections)
    )
    // Could restrict to selected fields but GraphQL will do so anyway
    return rows
})

export default {
  Query: {
    post: (parent, args, context, info) =>
    findOnePost(args, info.fieldNodes[0].selectionSet.selections),
    posts: (parent, args, context, info) =>
    findPosts(args, info.fieldNodes[0].selectionSet.selections)
  },
  Mutation: {
    addPost: (parent, args, context, info) => create(bridge, args),
    editPost: (parent, args, context, info) => findOneAndUpdate(bridge, args),
    deletePost: (parent, args, context, info) => findOneAndDelete(bridge, args)
  }
}

