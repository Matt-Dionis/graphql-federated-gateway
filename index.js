const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'location', url: 'https://gr881.sse.codesandbox.io/graphql' },
    { name: 'weather', url: 'https://4ccr3.sse.codesandbox.io/graphql' },
  ],
})

;(async () => {
  const { schema, executor } = await gateway.load()

  const server = new ApolloServer({ schema, executor })

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
})()
