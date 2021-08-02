import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./List.css";
function List() {
  const arr = useSelector((state) => state.cart.cartList);
  const products = useSelector((state) => state.product.productList);
  var sumTotal = 0;
  const item = arr.map((item) => {
    const subitem = products.find((subitem) => subitem.id === item.productId);
    sumTotal += subitem.price * item.amount;
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

  return (
    <div className="container-fluid mt-5">
      <h2 className="mb-5 text-center Bag">Bag</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="table-responsive">
            <table id="myTable" className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th className="text-right">
                    <span id="amount" className="amount">
                      Amount
                    </span>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>{item}</tbody>
              <tfoot>
                <tr>
                  <td colSpan="4"></td>
                  <td align="right">
                    <strong>
                      TOTAL = ${" "}
                      <span id="total" className="total">
                       {sumTotal}
                      </span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
