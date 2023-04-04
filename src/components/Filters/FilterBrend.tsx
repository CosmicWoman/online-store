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
        brands_ = brands_.filter(brand => brand.toLowerCase().includes(searchQuery.toLowerCase()))

        setBrands(brands_)
    }

    // todo: для фильтрации: взять все инпуты и проврить, отмечены ли они. Если у инпута есть свойство чекед,
    //  то добавить его name в массив в defaultFilter.Запускать проверку по кнопке.
    //  Каждый элемент массива из defaultFilter прогонять по производителям товара и при каждом совпадении, помещать товар в обновленный products_

    return (
        <div className="filter_manuf">
            <div className="filter_manuf_title">Производитель</div>
            <div className="filter_manuf_search">
                <input type="text"
                       placeholder='Поиск...'
                       value={searchQuery}
                       onChange={e => setSearchQuery(e.target.value)}/>
                <button>
                    <img src="/public/img/search.png" alt=""/>
                </button>
            </div>
            <List
                items={brands}
                renderItem={(brand: string) =>
                    <div className='filter_manuf_checkbox'>
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