import React from "react";
import FormSearching from "./FormSearching";
import "./index.scss";
function nav() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          id="navLogo"
          src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg"
          alt="Logo"
        />
      </div>
      <div className="navbar-right">
        <FormSearching></FormSearching>
      </div>
    </div>
  );
}

export default nav;
