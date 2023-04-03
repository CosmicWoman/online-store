import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import List from "../List";
import Typescare from "../../typescare/typescare";
import {defaultFilterTypes} from "../../types/types";

interface Filter{
    filter: defaultFilterTypes;
    setFilter: (value:defaultFilterTypes) => void
}

// todo: сменить вид курсора

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
                        onClick={() => setFilter({...filter, type: typekey})}
                        key={typekey}
                    >
                        {Typescare[typekey]}
                    </span>
            }
        />
    )
};

export default FilterTypesCare;