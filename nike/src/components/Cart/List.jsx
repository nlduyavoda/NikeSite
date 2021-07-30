import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ProductContext } from "../../Context/ProductContext";
import Item from "./Item";
import "./List.css";
function List() {
  const arr = useSelector((state) => state.cart.cartList);
  const Products = useSelector((state) => state.product.productList);
  let carts = [];

  const getProduct = (id, amount) => {
    const test = Products.filter((item) => {
      return item.id === id; //[test]
    });
    const product = test.map((item) => {
      return { ...item, amount };
    });
    console.log("product", product);
    return product; //product = [{...test,amount}]
  };
  //Check cart
  arr.forEach((item) => {
    //Check user
    if (item.userID === 1) {
      item.product.forEach((item) => {
        const cart = getProduct(item.productId, item.amount); // cart = product [] => cart[]
        carts = [...carts, ...cart]; //[...[{}],...[{}]] => [{},{}]
        console.log("carts", carts);
      });
    } else {
      console.log("no ok");
    }
  });
  console.log(carts);
  const item = carts.map((item) => {
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
    <div class="container-fluid mt-5">
      <h2 class="mb-5 text-center Bag">Bag</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="table-responsive">
            <table id="myTable" class="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th class="text-right">
                    <span id="amount" class="amount">
                      Amount
                    </span>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>{item}</tbody>
              <tfoot>
                <tr>
                  <td colspan="4"></td>
                  <td align="right">
                    <strong>
                      TOTAL = ${" "}
                      <span id="total" class="total">
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
