export default
`  type Post {
    id: String!
    title: String!
    timeCreated: String!
    userId: String!
    "User referenced by this Post"
    user(name: String, emailAddress: String): User
  }

  type Query {
    post(id: String!, title: String!, timeCreated: String!, userId: String!): Post
    posts: [Post]
  }

  type Mutation {
    addPost(id: String!, title: String!, timeCreated: String!, userId: String!): Post
    editPost(id: String!, title: String!, timeCreated: String!, userId: String!): Post
    deletePost(id: String!, title: String!, timeCreated: String!, userId: String!): ConfirmDeleteKey
  }
`