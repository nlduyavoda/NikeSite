import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/store";
import { fetchingProduct } from "../../services/pokemonService";
import { getlist } from "../../Slices/PokemonSlice";
import "./ProductList.css";
import { pokemon } from "../../types/pokemonType";

function ProductList() {
  const [state, setState] = useState<any | null>(null);
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state);
  const history = useHistory();
  useEffect(() => {
    fetchingProduct().then((res) => {
      dispatch(getlist(res));
    });
  }, []);

  useEffect(() => {
    if (pokemonList) {
      setState(pokemonList.pokemons);
    }
  }, [pokemonList]);
  const handleDetail = (params: any) => {
    history.push(`/${params}`);
  };
  return (
    <div className="Productlist">
      {state ? (
        <>
          {state.map((item: pokemon, index: number) => {
            return (
              <div className="item" key={index}>
                <div className="item_image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item_information">
                  <div className="information_top">
                    <div
                      className="product-name"
                      onClick={() => handleDetail(item.id)}
                    >
                      {item.name}
                    </div>
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
