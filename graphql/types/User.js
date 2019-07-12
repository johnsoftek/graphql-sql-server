export default
`  type User {
    id: String!
    name: String!
    emailAddress: String!
    "List of posts belonging to this User"
    posts(id: String, title: String, timeCreated: String): [Post]
  }

  type Query {
    user(id: String, name: String, emailAddress: String): User
    users: [User]
  }

  type Mutation {
    addUser(id: String!, name: String!, emailAddress: String!): User
    editUser(id:String, name:String, emailAddress:String): User
    deleteUser(id: String!): ConfirmDeleteKey
  }
`