import express from 'express'
import { ApolloServer, gql } from'apollo-server-express'
import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js'

async function startServer() {
  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app: app })

  app.use((req, res) => {
    res.send('Hello from express apollo server')
  })

  const port = process.env.PORT || 4000;

  app.listen(port, () => console.log(`Server in running on port ${port}`))

}

startServer()
