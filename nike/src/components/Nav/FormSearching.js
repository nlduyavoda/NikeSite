import React, { useState } from "react";
import { Col, Form, FormGroup, Input } from "reactstrap";
import { BsSearch, BsHeart, BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, item } from "@mui/material";
import "./FormSearching.css";
import FormSearch2 from "./Form2";
import { Heart } from "../icon/heart";
import { Cart } from "../icon/cart";
function FormSearching() {
  const carts = useSelector((state) => state.cart.cartList);

  return (
    <>
      <div className="input-icons">
        {/* <Form>
          <FormGroup row>
            <Col sm={5}>
              <FormSearch2 />
            </Col>
            <Col sm={1}>
              <Link to="#" className="CartIcon">
                <div className="iconHeart">
                  <BsHeart />
                </div>
              </Link>
            </Col>

            <Col sm={1}>
              <Link to="/cart" className="CartIcon">
                <div className="iconCart">
                  <BsBag />
                </div>
                <div className="amount">12</div>
              </Link>
            </Col>
          </FormGroup>
        </Form> */}
        <Grid container>
          <Grid item xs={8}>
            <FormSearch2 />
          </Grid>
          <Grid item xs={2}>
            <Heart />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default FormSearching;
