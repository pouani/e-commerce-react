import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"; // sur react v6 Switch a ete remplacer par Routes


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products:id" element={<Product/>} />
      </Routes>
    </Router>
  );
}

export default App;
