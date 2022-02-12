import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home/index";
import Pokemon from "./pages/ProductDetail";
function App() {
  // eslint-disable-next-line no-unused-vars
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:slug">
          <Pokemon />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
