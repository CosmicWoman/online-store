import React, {FC, PropsWithChildren} from 'react';
import {Product} from "../types/types";
import '../style/css/style.css';

interface ProductItemProps {
    product: Product;
    onClick: (product: Product) => void;
}

const ProductItem: FC<PropsWithChildren<ProductItemProps>> = ({product, onClick}) => {
    let priceNumber = product.price.toString().replace('.', ',');
    // let pp = {{product.img} === '' ? '/img/notfoto.png' : {product.img}}
    return (
        <div className='product'>
            <div className='product_img'>
                <img src={product.img} height='194px'/>
            </div>
             <div className='product_size'>
                <img src="/img/box.png" alt=""/>
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
                <button>В корзину
                    <img src="/img/basketbutton.png" alt=""/>
                </button>
            </div>
        </div>
    );
};

export default ProductItem;