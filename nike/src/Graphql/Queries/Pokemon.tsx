import { gql } from "@apollo/client";

export const GETLIST = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;
