import { Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import News from "../pages/News";
import "./index.scss";
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
