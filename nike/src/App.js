import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList.tsx";
function App() {
  return (
    <Router>
      <Route exact path="/">
        <ProductList />
      </Route>
    </Router>
  );
}

export default App;
