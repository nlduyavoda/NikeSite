import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "./index.css";
import ProDetail_images from "../../components/ProductDetail/ProDetail_images/ProDetail_images";
import ProDetail_infor from "../../components/ProductDetail/ProDetail_infor/ProDetail_infor";
import ProductRecommened from "../../components/ProductRecommened";

function ProductDetail() {
  const products = useSelector((state) => state.product.productList);
  const { id } = useParams();
  const integer = parseInt(id, 10);

  return (
    <div className="ProductDetail">
      {products
        .filter((item) => item.id === integer)
        .map((item) => (
          <div className="Prodetail">
            <div className="ProDetail_images col-8">
              <ProDetail_images data={item} />
            </div>
            <div className="ProDetail_infor col-4">
              <ProDetail_infor data={item} />
            </div>
          </div>
        ))}
      <ProductRecommened />
    </div>
  );
}

export default ProductDetail;
