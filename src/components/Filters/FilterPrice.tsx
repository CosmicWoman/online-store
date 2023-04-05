import React, {FC, PropsWithChildren} from 'react';
import initProducts from "../../product/products";
import {TypesPrice} from "../../types/types";

interface FilterPriceProps {
    selectPrice: {
        min:number,
        max:number
    },
    setSelectPrice: (selectPrice: TypesPrice) => void
}

const FilterPrice: FC<PropsWithChildren<FilterPriceProps>> = ({selectPrice, setSelectPrice}) => {
    let pricesArray = initProducts.map(product => product.price)
    let maxPrice = Math.max.apply(null, pricesArray)

    return (
        <div className='filter_price'>
            <div className='filter_price_title'>Цена ₸</div>
            <input
                type="number"
                placeholder='0'
                onChange={(e) => setSelectPrice({...selectPrice, min: Number(e.target.value)})}
            />
            - <input
                type="number"
                placeholder={maxPrice.toString()}
                onChange={(e) => setSelectPrice({...selectPrice, max: Number(e.target.value)})}
        />
        </div>

    );
};

export default FilterPrice;