import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProduct } from "../../services/pokemonService";
import { getlist } from "../../Slices/PokemonSlice";
import "./ProductList.css";
type PokemonType = {
  name: String;
  image: String;
  artwork: String;
};

function ProductList() {
  const [state, setState] = useState<any | null>(null);
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: any) => state);

  useEffect(() => {
    fetchingProduct().then((res) => {
      dispatch(getlist(res));
    });
  }, []);

  useEffect(() => {
    if (pokemonList) {
      setState(pokemonList.pokemons.pokemon);
    }
  }, [pokemonList]);

  console.log(typeof state);
  console.log(state);

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
