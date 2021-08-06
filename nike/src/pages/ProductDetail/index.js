import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function ProductDetail() {
  const products = useSelector((state) => state.product.productList);
  const { id } = useParams();
  const integer = parseInt(id, 10);
  
  return (
    <>
      {products
        .filter((item) => item.id === integer)
        .map((item) => (
          <div>{item.name}</div>
        ))}
    </>
  );
}

export default ProductDetail;
