import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList.tsx";
import ProductDetail from "./pages/ProductDetail/index";
function App() {
  return (
    <Router>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route path="/detail/:slug">
        <ProductDetail />
      </Route>
    </Router>
  );
}

export default App;
