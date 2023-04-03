import React from 'react';
import Catalog from "./pages/Catalog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './style/css/style.css'

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="product_list">
                    <Catalog/>
                </div>
            </div>
            <Footer/>
        </div>

    )
};

export default App;
