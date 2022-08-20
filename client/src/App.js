
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import About from  "./components/About";
import AddProduct from "./components/AddProduct";
import Products from  "./components/ecommercePproduct/Products"
import ProductDetails from './components/ecommercePproduct/ProductDetails';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>

     <main>
        <Routes>
          <Route  path= "/" element={<Home />} exact />
          <Route  path= "/add" element={<AddProduct />} exact />
          <Route path = "/products" element = {<Products />} exact/>
          <Route  path= "/about" element={<About />} exact />
          <Route path="/products/:id" element = {<ProductDetails />} />
        </Routes>
        </main>
     
    </React.Fragment>
  );
}

export default App;
