import React from "react";
import { useParams } from "react-router";
import ProductList from "../../components/ProductList/ProductList";
import "./index.scss";

function Home() {
  return <ProductList></ProductList>;
}

export default Home;
