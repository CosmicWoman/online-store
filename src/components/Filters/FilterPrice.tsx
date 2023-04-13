import React, {FC, PropsWithChildren} from 'react';
import initProducts from "../../product/productsjson";
import {TypesPrice} from "../../types/fieldTypes";

interface FilterPriceProps {
    selectPrice: {
        min: number,
        max: number
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
                data-testid='input-price'
                type="number"
                placeholder={maxPrice.toString()}
                onChange={(e) => setSelectPrice({...selectPrice, max: Number(e.target.value)})}
        />
        </div>

    );
};

export default FilterPrice;