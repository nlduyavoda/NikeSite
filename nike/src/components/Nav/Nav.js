import React from "react";
// import Logo from "../../img/nike-logo.jpg";
import Menu from "./Menu";
import FormSearching from "./FormSearching";
import "./Nav.css";
import { Link } from "react-router-dom";
function nav() {
  return (
    <div>
      <div class="row col-12 navbar">
        <Link to="/" class="col-1">
          <img
            id="navLogo"
            src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg"
            alt="Logo"
          />
        </Link>
        <div class="col-6">
          <Menu></Menu>
        </div>
        <div class="col-5">
          <FormSearching></FormSearching>
        </div>
      </div>
    </div>
  );
}

export default nav;
