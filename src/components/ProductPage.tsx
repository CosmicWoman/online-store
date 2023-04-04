import React, {FC, useEffect, useState} from 'react';
import {Product} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import initProducts from "../product/products";
import Typescare from "../typescare/typescare";
import _ from 'lodash';

const ProductPage: FC = () => {
    const [product, setProduct] = useState<Product | null>(null)
    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct()
    }, [])

    async function fetchProduct() {
        try {
            for (let product_ of initProducts) {
                if (product_.id.toString() === params.id) {
                    setProduct(product_)
                }
            }
        } catch (e) {
            alert(e)
        }
    }

    let priceNumber = product?.price.toString().replace('.', ',');

    return (
        <div className='page_product'>
            <div className='page_product_img'>
                <img src={product?.img} alt="тут должен быть вид товара"/>
            </div>
            <div className="page_product_info">
                <div className='page_product_name'>
                    <div className="page_product_name_strong">{product?.brand}</div>
                    <div className="page_product_name_text">{product?.name}</div>
                </div>
                <div className='page_product_size'>
                    <img src="/public/img/box.png" alt=""/>
                    {product?.size} {product?.unit}
                </div>
                <div className='page_product_price'>
                    <div>{priceNumber} ₸</div>

                    <div className='price_counter'>
                        <button className="price_counter_minus">-</button>
                        <span>1</span>
                        <button className="price_counter_plus">+</button>
                    </div>
                    <button className='page_product_basket'>
                        В корзину
                        <img src="/public/img/basketbutton.png" alt=""/>
                    </button>
                </div>
                <div className='product_other'>
                    <button className='product_other_style product_other_share'>
                        <img src="/public/img/link.png" alt=""/>
                    </button>
                    <div className='product_other_style product_other_info'>
                        <div>При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области</div>
                    </div>
                    <button className='product_other_style product_other_price'>
                        Прайс-лист
                        <img src="/public/img/downoladBlack.png" alt=""/>
                    </button>
                </div>
                <div className='product_info'>
                    <div className='product_info_short'>
                        <div className="specif_character">
                            <div className="specif_character_title">Производитель:</div>
                            {product?.manufacturer}
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Бренд:</div>
                            {product?.brand}
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Штрихкод:</div>
                            {product?.barcode}
                        </div>
                    </div>

                    <div className='product_info_desc'>
                        <div className='desc_title'>Описание</div>
                        <div className='desc_text'>{product?.desc}</div>
                        <div className="line"></div>
                    </div>

                    <div className='product_info_specification'>
                        <div className="specif_title">
                        Характеристики
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Назначение:</div>
                            {product ? _.get(Typescare, product.type) : ''}
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Тип:</div>
                            {product?.brand}
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Производитель:</div>
                            {product?.manufacturer}
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Бренд:</div>
                            {product?.brand}
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Штрихкод:</div>
                            {product?.barcode}
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Вес:</div>
                            {product?.size} {product?.unit}
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Объем:</div>
                            {product?.size} {product?.unit}
                        </div>
                        <div className="specif_character">
                            <div className="specif_character_title">Кол-во в коробке:</div>
                            {product?.size} {product?.unit}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;