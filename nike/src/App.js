import Home from "./pages/Home";
import ProductContextProvider from "./Context/ProductContext";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Cart from "./pages/Cart/index";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <>
      <ProductContextProvider>
        <Router>
          <div>
            <Nav></Nav>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </Router>
      </ProductContextProvider>
    </>
  );
}

export default App;
