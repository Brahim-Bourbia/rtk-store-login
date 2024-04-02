import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>ProductList</Link>
          </li>
        </ul>
      </div>
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
