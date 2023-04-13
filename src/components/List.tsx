import React from 'react';
import '../style/css/style.css';
import {Product} from "../types/fieldTypes";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props:ListProps<T>) {
    return (
        <div className='products'>
            {props.items.map(props.renderItem)}
        </div>
    )
};