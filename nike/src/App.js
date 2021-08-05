import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./pages/Cart/index";
import Nav from "./components/Nav/Nav";
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
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
