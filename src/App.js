import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Main from "./Main/Main";
import Layout from "./Layout/Layout";
import Category from "./Category/Category";
import Product from "./Product/Product";
import waterProducts from './Data/waterProducts';
import MyMap from './Information/MyMap'

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" exact element={<Layout children={<Main/>}/>}/>
                  <Route path="/drinks" exact element={<Layout children={<Category/>}/>}/>
                  <Route path="/drinks/product" exact element={<Layout children={<Product product={waterProducts[0]}/>}/>}/>
                  <Route path="/info" exact element={<Layout children={<MyMap/>}/> }/>
              </Routes>
          </Router>
      </>

  );
}

export default App;
