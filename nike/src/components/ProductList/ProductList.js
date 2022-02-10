import React, { useState } from "react";
import "./ProductList.css";
import Button from "@mui/material/Button";
import Layout from "../../Layout/index";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
const GET_POKEMONS = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        image
        artwork
      }
    }
  }
`;
function ProductList() {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      limit: 10,
      offset: 10,
    },
  });
  const [state, setState] = useState(null);
  useEffect(() => {
    setState(data?.pokemons?.results);
  }, [data?.pokemons?.results]);
  return (
    <div className="Productlist">
      {state ? (
        <>
          {state.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="item_image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item_information">
                  <div className="information_top">
                    <div className="product-name">{item.name}</div>
                  </div>
                  <div className="information_bottom">
                    <div className="price">$180</div>
                    <div className="pay">
                      <Button>ADD TO CART</Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default ProductList;
