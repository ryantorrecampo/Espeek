// src/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "http://192.168.68.53:4000/graphql", // your GraphQL server URL
  cache: new InMemoryCache(),
})

export default client
