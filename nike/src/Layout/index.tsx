import { Link, Route } from "react-router-dom";
import "./index.scss";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import News from "../pages/News";
export default function Layout() {
  return (
    <div className="_App">
      <div className="component">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </div>
    </div>
  );
}
