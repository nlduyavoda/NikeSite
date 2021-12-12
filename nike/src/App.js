import Home from "./pages/Home/index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./pages/Cart/index";
import ProductDetail from "./pages/ProductDetail/index";
import Nav from "./components/Nav/index";
function App() {
  return (
    <>
      <Router>
        <div>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product-detail/:id" children={<ProductDetail />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
