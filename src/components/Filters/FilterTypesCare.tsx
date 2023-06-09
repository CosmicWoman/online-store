import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import List from "../List";
import Typescare from "../../typescare/typescare";
import {defaultFilterTypes} from "../../types/fieldTypes";

interface Filter{
    filter: defaultFilterTypes;
    setFilter: (value:defaultFilterTypes) => void
}

const FilterTypesCare: FC<PropsWithChildren<Filter>> = ({filter,setFilter}) => {
    const [types, setTypes] = useState<string[]>([])

    useEffect(() => {
        fetchTypes()
    }, [])

    async function fetchTypes() {
        setTypes(Object.keys(Typescare))
    }


    return (
        <List
            items={types}
            renderItem={(typekey: string) =>
                    <span
                        data-testid='filter-types'
                        onClick={() => setFilter({...filter, type: typekey})}
                        key={typekey}
                        style={{cursor:'pointer'}}
                    >
                        {Typescare[typekey]}
                    </span>
            }
        />
    )
};

export default FilterTypesCare;