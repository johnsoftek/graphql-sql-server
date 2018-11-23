import express from 'express'
import expressGraphQL from 'express-graphql'
import bodyParser from 'body-parser'
import cors from 'cors'

import schema from './graphql/'

const app = express()
const PORT = process.env.PORT || '4000'

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
)

// Serve static assets if in production.
if (process.env.NODE_ENV === 'production') {
  // Set static folder.
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
