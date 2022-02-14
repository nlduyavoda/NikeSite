import { gql } from "@apollo/client";

export const GETLIST = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;
