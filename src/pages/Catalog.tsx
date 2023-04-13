import React from 'react';
import {BrowserRouter} from "react-router-dom";

import '../style/css/style.css';
import CatalogRouter from "../routes/CatalogRouter";

const Catalog = () => {
    return (
            <BrowserRouter>
                <CatalogRouter/>
            </BrowserRouter>
    )
};

export default Catalog;