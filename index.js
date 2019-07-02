const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: "location",
      url: "https://graphql-location-service.herokuapp.com/graphql"
    },
    {
      name: "weather",
      url: "https://graphql-weather-service.herokuapp.com/graphql"
    }
  ]
});

(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({ schema, executor });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
