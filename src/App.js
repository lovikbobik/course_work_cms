import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Main from "./Main/Main";
import Layout from "./Layout/Layout";
import Category from "./Category/Category";
import drinksIce from './Data/drinksIce'
import categoryWater from "./Data/categoryWater";
import categoryDessert from "./Data/categoryDessert";
import categoryCombo from "./Data/categoryCombo";
import categorySale from "./Data/categorySale";
import categoryBeer from "./Data/categoryBeer";
import pizza from "./Data/Pizza";
import Products from "./Product/Products";
import drinksHot from "./Data/drinksHot";
import MyMap from "./Information/MyMap";
import Contacts from "./Information/Contacts";
import Quality from "./Information/Quality";
import Help from "./Information/Help";
import Basket from "./Basket/Basket";

function App() {
    return (
        <>

            <Router>
                <Routes>
                    <Route path="/map" exact element={<Layout children={<MyMap/>}/>}/>
                    <Route path="/contacts" exact element={<Layout children={<Contacts/>}/>}/>
                    <Route path="/quality" exact element={<Layout children={<Quality/>}/>}/>
                    <Route path="/help" exact element={<Layout children={<Help/>}/>}/>

                    <Route path="/basket" exact element={<Layout children={<Basket/>}/>}/>

                    <Route path="/" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                    <Route path="/drinks" exact element={<Layout children={<Category category={categoryWater}/>}/>}/>
                    <Route path="/desserts" exact
                           element={<Layout children={<Category category={categoryDessert}/>}/>}/>
                    <Route path="/combo" exact element={<Layout children={<Category category={categoryCombo}/>}/>}/>
                    <Route path="/sale" exact element={<Layout children={<Category category={categorySale}/>}/>}/>
                    <Route path="/beer" exact element={<Layout children={<Category category={categoryBeer}/>}/>}/>

                    <Route path="/drinks/ice" exact element={<Layout children={<Products products={drinksIce}/>}/>}/>
                    <Route path="/drinks/hot" exact element={<Layout children={<Products products={drinksHot}/>}/>}/>

                    <Route path="/popular" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                    <Route path="/new" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                    <Route path="/meet" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                    <Route path="/vegan" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                    <Route path="/acute" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>

                </Routes>
            </Router>
        </>
    );
}

export default App;
