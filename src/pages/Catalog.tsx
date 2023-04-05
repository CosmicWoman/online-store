import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";
import '../style/css/style.css';

const Catalog = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/catalog'} element={<ProductList/>}/>
                    <Route path={'/catalog/:id'} element={<ProductPage/>}/>
                    <Route path={'*'} element={<ProductList/>}/>
                </Routes>
            </BrowserRouter>
    )
};

export default Catalog;