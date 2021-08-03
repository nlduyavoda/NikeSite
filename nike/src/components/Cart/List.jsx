import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { total } from "../../redux/actions/cart_action";
import Item from "./Item";
import "./List.css";
function List() {
  const arr = useSelector((state) => state.cart.cartList);
  const products = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  var sumTotal = 0;
  const item = arr.map((item) => {
    const subitem = products.find((subitem) => subitem.id === item.productId);
    sumTotal += subitem.price * item.amount;
    dispatch(total(sumTotal));
    return (
      <Item
        key={item.id}
        name={subitem.name}
        price={subitem.price}
        image={subitem.image}
        amount={item.amount}
        product={item}
        total={subitem.price * item.amount}
      />
    );
  });
  return <>{item}</>;
}

export default List;
