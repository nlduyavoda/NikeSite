import React from "react";
import List from "../../components/Cart/List";
import Total from "../../components/Cart/Total";
import NavFilter from "../../components/Filter/NavFilter";
import "./Cart.css";
function Cart(props) {
  return (
    <div>
      <NavFilter></NavFilter>
      <div className="row">
        <div className="col-9 CartList">
          <List></List>
        </div>
        <div className="col-2 CartTotal">
          <Total></Total>
        </div>
      </div>
    </div>
  );
}

export default Cart;
