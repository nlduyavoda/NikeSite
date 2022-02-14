import { useQuery } from "@apollo/client";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GETLIST } from "../../Graphql/Queries/Pokemon";
import { RootState } from "../../redux/store";
import { getlist } from "../../Slices/PokemonSlice";
import "./ProductList.css";

const initialVariables = { limit: 50, offset: 50 };
function ProductList() {
  const [state, setState] = useState<any | null>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state);
  const { data } = useQuery(GETLIST, {
    variables: initialVariables,
  });
  if (data) {
    dispatch(getlist(data.pokemons.results));
  }
  useEffect(() => {
    if (pokemonList) {
      setState(pokemonList.pokemons);
    }
  }, [pokemonList]);
  return (
    <div className="Productlist">
      {state ? (
        <>
          {state.map((item: any, index: number) => {
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
                      <Button
                        onClick={() => {
                          history.push("/detail");
                        }}
                      >
                        <AiOutlineShoppingCart />
                      </Button>
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
