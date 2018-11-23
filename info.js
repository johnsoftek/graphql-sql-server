let x = {
  fieldName: 'posts',
  fieldNodes: [
    {
      kind: 'Field',
      name: { kind: 'Name', value: 'posts', loc: { start: 4, end: 9 } },
      arguments: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'title', loc: { start: 16, end: 21 } },
            arguments: [],
            directives: [],
            loc: { start: 16, end: 21 }
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user', loc: { start: 26, end: 30 } },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'id',
                    loc: { start: 39, end: 41 }
                  },
                  arguments: [],
                  directives: [],
                  loc: { start: 39, end: 41 }
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'name',
                    loc: { start: 48, end: 52 }
                  },
                  arguments: [],
                  directives: [],
                  loc: { start: 48, end: 52 }
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'posts',
                    loc: { start: 59, end: 64 }
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'title',
                          loc: { start: 75, end: 80 }
                        },
                        arguments: [],
                        directives: [],
                        loc: { start: 75, end: 80 }
                      }
                    ],
                    loc: { start: 65, end: 88 }
                  },
                  loc: { start: 59, end: 88 }
                }
              ],
              loc: { start: 31, end: 94 }
            },
            loc: { start: 26, end: 94 }
          }
        ],
        loc: { start: 10, end: 98 }
      },
      loc: { start: 4, end: 98 }
    }
  ],
  returnType: '[Post]',
  parentType: 'Query',
  path: { key: 'posts' },
  schema: {
    astNode: {
      kind: 'SchemaDefinition',
      directives: [],
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          operation: 'query',
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Query', loc: { start: 18, end: 23 } },
            loc: { start: 18, end: 23 }
          },
          loc: { start: 11, end: 23 }
        },
        {
          kind: 'OperationTypeDefinition',
          operation: 'mutation',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Mutation',
              loc: { start: 36, end: 44 }
            },
            loc: { start: 36, end: 44 }
          },
          loc: { start: 26, end: 44 }
        }
      ],
      loc: { start: 0, end: 46 }
    },
    _queryType: 'Query',
    _mutationType: 'Mutation',
    _subscriptionType: null,
    _directives: ['@skip', '@include', '@deprecated'],
    _typeMap: {
      Query: 'Query',
      ID: 'ID',
      String: 'String',
      DateTime: 'DateTime',
      Post: 'Post',
      User: 'User',
      Mutation: 'Mutation',
      ConfirmDeleteKey: 'ConfirmDeleteKey',
      __Schema: '__Schema',
      __Type: '__Type',
      __TypeKind: '__TypeKind',
      Boolean: 'Boolean',
      __Field: '__Field',
      __InputValue: '__InputValue',
      __EnumValue: '__EnumValue',
      __Directive: '__Directive',
      __DirectiveLocation: '__DirectiveLocation'
    },
    _implementations: {},
    __validationErrors: [],
    __allowedLegacyNames: []
  },
  fragments: {},
  operation: {
    kind: 'OperationDefinition',
    operation: 'query',
    variableDefinitions: [],
    directives: [],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [
        {
          kind: 'Field',
          name: { kind: 'Name', value: 'posts', loc: { start: 4, end: 9 } },
          arguments: [],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'title',
                  loc: { start: 16, end: 21 }
                },
                arguments: [],
                directives: [],
                loc: { start: 16, end: 21 }
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'user',
                  loc: { start: 26, end: 30 }
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: { start: 39, end: 41 }
                      },
                      arguments: [],
                      directives: [],
                      loc: { start: 39, end: 41 }
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: { start: 48, end: 52 }
                      },
                      arguments: [],
                      directives: [],
                      loc: { start: 48, end: 52 }
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'posts',
                        loc: { start: 59, end: 64 }
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'title',
                              loc: { start: 75, end: 80 }
                            },
                            arguments: [],
                            directives: [],
                            loc: { start: 75, end: 80 }
                          }
                        ],
                        loc: { start: 65, end: 88 }
                      },
                      loc: { start: 59, end: 88 }
                    }
                  ],
                  loc: { start: 31, end: 94 }
                },
                loc: { start: 26, end: 94 }
              }
            ],
            loc: { start: 10, end: 98 }
          },
          loc: { start: 4, end: 98 }
        }
      ],
      loc: { start: 0, end: 100 }
    },
    loc: { start: 0, end: 100 }
  },
  variableValues: {}
}
