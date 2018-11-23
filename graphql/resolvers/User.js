
import _pick from 'lodash/pick'
import { findOne, find, create, findOneAndUpdate, findOneAndDelete } from '../operations'

// Repeat for relations
import {findPosts} from './Post'

const bridge = {
  type: 'User',
  fieldName: 'user',
  tableName: 'user',
  fieldColumnMap: {
    'id': 'id',
    'name': 'name',
    'emailAddress': 'email_address'
  },
  pkField: 'id'
}

const resolveRefs = (row, selections) => {
  let refField
  refField = selections.find(f => f.kind === 'Field' && f.name.value === 'posts')
  if (refField) {
      row.posts = findPosts({ userId: row['id'] }, refField.selectionSet.selections)
    }

  return row
}

// The User resolver.
export const findOneUser = (args, selections) =>
  findOne(bridge, args)  
.then(row => resolveRefs(row, selections))

export const findUsers = (args, selections) =>
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
    user: (parent, args, context, info) =>
    findOneUser(args, info.fieldNodes[0].selectionSet.selections),
    users: (parent, args, context, info) =>
    findUsers(args, info.fieldNodes[0].selectionSet.selections)
  },
  Mutation: {
    addUser: (parent, args, context, info) => create(bridge, args),
    editUser: (parent, args, context, info) => findOneAndUpdate(bridge, args),
    deleteUser: (parent, args, context, info) => findOneAndDelete(bridge, args)
  }
}

