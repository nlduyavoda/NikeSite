import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const pokemonApi = "https://graphql-pokeapi.graphcdn.app/";
export const apolloClient = new ApolloClient({
  uri: pokemonApi,
  cache: new InMemoryCache(),
});
