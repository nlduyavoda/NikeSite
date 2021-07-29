import React from "react";
import "./Nav.css";
import { Nav, NavItem, NavLink } from "reactstrap";

function Menu(props) {
  return (
    <div>
      <Nav className="navMenu">
        <NavItem>
          <NavLink className="navItem" href="#">
            Men
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navItem" href="#">
            Women
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navItem" href="#">
            Kid
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Menu;
