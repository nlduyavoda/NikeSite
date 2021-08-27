import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./index.css";
import ProDetail_images from "../../components/ProductDetail/ProDetail_images/ProDetail_images";
import ProDetail_infor from "../../components/ProductDetail/ProDetail_infor/ProDetail_infor";
import ProductRecommened from "../../components/ProductRecommened";
import productApi from "../../api/productApi";
import { SetProduct } from "../../redux/actions/product_action";

function ProductDetail() {
  const products = useSelector((state) => state.product.productList);
  const product = useSelector((state) => state.product.selectedProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(async () => {
    const getProductById = async () => {
      try {
        const response = await productApi.GetProduct(id);
        dispatch(SetProduct(response));
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
    };
    getProductById();
  }, []);
  return (
    <div className="ProductDetail">
      <div className="Prodetail">
        <div className="ProDetail_images col-8">
          <ProDetail_images data={product} />
        </div>
        <div className="ProDetail_infor col-4">
          <ProDetail_infor data={product} />
        </div>
      </div>
      <ProductRecommened />
    </div>
  );
}

export default ProductDetail;
