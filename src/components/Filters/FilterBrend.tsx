import React, {useEffect, useState} from 'react';
import List from "../List";
import initProducts from "../../product/products";

const FilterBrand = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [brands, setBrands] = useState<string[]>([])


    useEffect(() => {
        fetchBrands()
    }, [searchQuery])

    async function fetchBrands() {
        let brands_ = initProducts.map((product) => product.manufacturer)
        brands_ = [...new Set(brands_)]
        // todo: поиск по брендам (searchQuery/.filter/проверка совпадений в строке)
        setBrands(brands_)
    }

    return (
        <div className="filter_manuf">
            <div className="filter_manuf_title">Производитель</div>
            <div className="filter_manuf_search">
                <input type="text"
                       placeholder='Поиск...'
                       value={searchQuery}
                       onChange={e => setSearchQuery(e.target.value)}/>
                <button>
                    <img src="/img/search.png" alt=""/>
                </button>
            </div>
            <List
                items={brands}
                renderItem={(brand: string) =>
                    <div>
                        <input
                            type='checkbox'
                            name={brand}
                        />
                        <label>{brand}</label>
                    </div>
                }
            />
        </div>
    );
};

export default FilterBrand;