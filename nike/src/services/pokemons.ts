import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { gql, useMutation, useQuery } from "@apollo/client";

const pokemonApi = "https://graphql-pokeapi.graphcdn.app/";
export const pokemons = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: pokemonApi }),
  endpoints: (builder) => ({
    getPokemons: builder.query<any, any>({
      query: ({ limit, offset }) => ({
        document: gql`
          query getPokemons($limit: Int, $offset: Int) {
            pokemons(limit: $limit, offset: $offset) {
              results {
                name
                image
                artwork
              }
            }
          }
        `,
        variables: {
          limit,
          offset,
        },
      }),
    }),
  }),
});
