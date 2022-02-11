import { gql } from "@apollo/client";
import { useState } from "react";
import { apolloClient } from "../Graphql/apolloClient";
import { GETLIST } from "../Graphql/Queries/Pokemon";

export const fetchingProduct = async () => {
  const response = await apolloClient.query({
    query: GETLIST,
    variables: {
      limit: 50,
      offset: 50,
    },
  });
  if (response && response.data.pokemons.results) {
    return response.data.pokemons.results;
  }
};
