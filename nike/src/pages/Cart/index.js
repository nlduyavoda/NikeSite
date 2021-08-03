import React from "react";
import List from "../../components/Cart/List";
import Total from "../../components/Cart/Total";
import NavFilter from "../../components/Filter/NavFilter";
import "./Cart.css";
function Cart() {
  return (
    <div>
      <NavFilter></NavFilter>
      <div className="row-12 fullcart">
        <div className="col-7 CartList">
          <div className="bag">Bag</div>
          <List></List>
        </div>
        <div className="col-5 CartTotal">
          <Total></Total>
        </div>
      </div>
    </div>
  );
}

export default Cart;
