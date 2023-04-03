import React, {FC, useEffect, useRef, useState} from 'react';
import {defaultFilterTypes, Product} from "../types/types";
import {useNavigate} from "react-router-dom";
import List from "./List";
import ProductItem from "./ProductItem";
import initProducts from "../product/products";
import MySelect from "../MyComponents/MySelect";
import '../style/css/style.css';
import Pagination from "./Pagination";
import FilterPrice from "./Filters/FilterPrice";
import FilterBrand from "./Filters/FilterBrend";
import FilterTypesCare from "./Filters/FilterTypesCare";

const defaultFilter = {
    'price': {
        'min': 0,
        'max': 0,
    },
    'manufacturer': [],
    'type': '',
}

const ProductList: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    const [sortValue, setSortValue] = useState('name');
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState<defaultFilterTypes>(defaultFilter);
    const pageSize = 15;

    const amountPages = () => {
        return Math.ceil(initProducts.length / pageSize)
    };

    useEffect(() => {
        fetchProducts()
    }, [sortValue, page, filter])

    async function fetchProducts() {
        let products_ = [...initProducts];

        // todo:это фильтрация
        console.log(filter)
        // это сортировка
        let isReverse = sortValue.includes('-');
        let value = sortValue.replace('-', '');
        products_ = products_.sort(
            (a, b) => {
                if (typeof a[value] === 'string') {
                    return a[value].localeCompare(b[value])
                }
                return (a[value] - b[value])
            }
        )
        if (isReverse) {
            products_.reverse()
        }

        let start = page * pageSize - pageSize;
        let end = page * pageSize;
        products_ = products_.slice(start, end)

        setProducts(products_)
    }

    return (
        <div className='catalog'>
            <div className="catalog_header">
                <div className="navigation_bar">
                    <div className="navigation_home">Главная</div>
                    <div>|</div>
                    <div>Косметика и гигиена</div>
                </div>
                <div className="catalog_line">
                    <div className="catalog_title">
                        Косметика и гигиена
                    </div>
                    <div className="sorting">
                        <div className="sorting_title">Сортировка:</div>
                        <div className="sorting_sort">
                            <MySelect
                                options={[
                                    {value: 'name', name: 'Сортировка А-Я'},
                                    {value: '-name', name: 'Сортировка Я-А'},
                                    {value: '-price', name: 'По убыванию цены'},
                                    {value: 'price', name: 'По возрастанию цены'},
                                ]}
                                value={sortValue}
                                onChange={setSortValue}/>
                        </div>
                    </div>
                </div>
                <div className="catalog_types">
                    <FilterTypesCare
                        filter={filter}
                        setFilter={setFilter}
                    />
                </div>
            </div>

            <div className="catalog_content">
                <div className="filter">
                    <div className="catalog_filter_title">подбор по параметрам</div>
                    <FilterPrice/>
                    <FilterBrand/>
                    <div className="filter_buttons">
                        <button className="button_show">Показать</button>
                        <button className="button_delete">
                            <img src="/img/delete.png" alt=""/>
                        </button>
                    </div>
                    <FilterTypesCare
                        filter={filter}
                        setFilter={setFilter}
                    />
                </div>
                <div className="catalog_product">
                    <div className="list">
                        <List
                            items={products}
                            renderItem={(product: Product) =>
                                <ProductItem
                                    onClick={(product) => navigate('/catalog/' + product.id)}
                                    product={product}
                                    key={product.id}
                                />
                            }
                        />
                    </div>
                    <Pagination
                        page={page}
                        changePage={setPage}
                        amountPages={amountPages()}/>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum
                        sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus
                        consectetur
                        aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed
                        nulla ullamcorper enim, malesuada.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;