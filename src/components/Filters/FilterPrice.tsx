import React from 'react';
import initProducts from "../../product/products";

const FilterPrice = () => {
    let pricesArray = initProducts.map(product => product.price)
    let maxPrice = Math.max.apply(null, pricesArray)
    return (
        <div className='filter_price'>
            <div className='filter_price_title'>Цена ₸</div>
            <input type="number" placeholder='0'/>
            - <input type="number" placeholder={maxPrice.toString()}/>
        </div>

    );
};

export default FilterPrice;