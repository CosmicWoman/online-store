import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Product} from "../types/fieldTypes";
import '../style/css/style.css';
import MyCounter from "../MyComponents/MyCounter";

interface ProductCardProps {
    product: Product;
    onClick: (product: Product) => void;
}

const ProductCard: FC<PropsWithChildren<ProductCardProps>> = ({product, onClick}) => {
    let priceNumber = product.price.toString().replace('.', ',');
    const [button, setButton] = useState(true)
    const [count, setCount] = useState(1);

    return (
        <div className='product' data-testid='product-card'>
            <div className='product_img'>
                <img src={product.img} height='194px'/>
            </div>
            <div className='product_size'>
                <img src="/public/img/box.png" alt=""/>
                {product.size} {product.unit}
            </div>
            <div onClick={() => onClick(product)} className='product_name'>
                <div className="product_brand_strong">{product.brand}</div>
                {product.name}
            </div>
            <div className="product_info">Штрихкод:
                <div className="product_strong"> {product.barcode}</div>
            </div>
            <div className="product_info">Производитель:
                <div className="product_strong"> {product.manufacturer}</div>
            </div>
            <div className="product_info product_brand">Бренд:
                <div className="product_strong"> {product.brand}</div>
            </div>
            <div className='product_price'>
                <div className='product_price_n'>{priceNumber} ₸</div>
                {button && <button data-testid='btn'
                                   onClick={() => setButton(prev => !prev)}>В корзину
                    <img src="/public/img/basketbutton.png" alt=""/>
                </button>}
                {!button && <div className='counter' data-testid='counter'>
                    <button
                        data-testid='counter-minus'
                        className="counter_minus"
                        onClick={() => {
                            if (count <= 1) {
                                setButton(true)
                            } else {
                                setCount(count - 1)
                            }
                        }}
                    >-
                    </button>
                    <div
                        className="counter_result">{count}</div>
                    <button
                        className="counter_plus"
                        onClick={() => setCount(count + 1)}
                    >+
                    </button>
                </div>}
            </div>
        </div>
    );
};

export default ProductCard;