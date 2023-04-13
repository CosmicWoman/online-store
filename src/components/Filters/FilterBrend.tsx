import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import List from "../List";
import initProducts from "../../product/productsjson";

interface FilterBrandProps {
    selectBrands: string[],
    setSelectBrands: (selectBrands: string[]) => void
}

const FilterBrand: FC<PropsWithChildren<FilterBrandProps>> = ({selectBrands, setSelectBrands}) => {
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

    function onClickBrand(brand: string) {
        if (selectBrands.includes(brand)) {
            setSelectBrands(selectBrands.filter(selectBrand => selectBrand !== brand))
        } else {
            setSelectBrands([...selectBrands, brand])
        }
    }

    return (
        <div className="filter_manuf">
            <div className="filter_manuf_title">Производитель</div>
            <div className="filter_manuf_search">
                <input
                    data-testid='input'
                    type="text"
                    placeholder='Поиск...'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}/>
                <button data-testing='toggle-dtn'>
                    <img src="/public/img/search.png" alt=""/>
                </button>
            </div>
            <List
                items={brands}
                renderItem={(brand: string) =>
                    <div
                        data-testid='brands'
                        className='filter_manuf_checkbox'
                        key={brand}
                    >
                        <input
                            type='checkbox'
                            name={brand}
                            checked={selectBrands.includes(brand)}
                            onChange={() => onClickBrand(brand)}
                        />
                        <label>{brand}</label>
                    </div>
                }
            />
        </div>
    );
};

export default FilterBrand;