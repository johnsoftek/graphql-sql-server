export default
`  type User {
    id: String!
    name: String!
    emailAddress: String!
    posts: [Post]
  }

  type Query {
    user(id: String, name: String, emailAddress: String): User
    users: [User]
  }

  type Mutation {
    addUser(id: String!, name: String!, emailAddress: String!): User
    editUser(id: String, name: String, emailAddress: String): User
    deleteUser(id: String, name: String, emailAddress: String): ConfirmDeleteKey
  }
`