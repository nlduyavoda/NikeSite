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
  return (
    <>
      <div className="input-icons">
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
