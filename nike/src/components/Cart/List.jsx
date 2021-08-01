import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./List.css";
function List() {
  const arr = useSelector((state) => state.cart.cartList);
  console.log("arr", arr);
  const item = arr.map((item) => {
    return (
      <Item
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        product={item}
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
                        0
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
