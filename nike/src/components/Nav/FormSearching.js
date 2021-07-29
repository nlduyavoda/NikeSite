import React, { useContext } from "react";
import { Col, Form, FormGroup, Input } from "reactstrap";
import { BsSearch, BsHeart, BsBag } from "react-icons/bs";
import { ProductContext } from "../../Context/ProductContext";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Cart from "../../pages/Cart/index";
function FormSearching() {
  return (
    <>
      <div className="input-icons">
        <Form>
          <FormGroup row>
            <Col sm={5}>
              <div className="formSearch">
                <div className="icon">
                  <BsSearch />
                </div>
                <Input
                  className="input_field"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Seaching"
                ></Input>
              </div>
            </Col>
            <Col sm={1}>
              <div className="formSearch">
                <div className="iconHeart">
                  <BsHeart />
                </div>
              </div>
            </Col>

            <Col sm={1}>
              <Link to="/cart" className="CartIcon">
                {" "}
                <div className="iconCart">
                  <BsBag />
                </div>
                <div className="amount">{Cart.length}</div>
              </Link>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}

export default FormSearching;
