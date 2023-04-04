import React, {FC, PropsWithChildren, useRef, useState} from 'react';

const getPageArray = (amountPages: number) => {
    let result = [];
    for (let i = 0; i < amountPages; i++) {
        result.push(i + 1)
    }
    return result
}

interface PaginationProps {
    amountPages: number;
    page: number;
    changePage: (p:number) => void;
}

const Pagination: FC<PropsWithChildren<PaginationProps>> = ({amountPages, page, changePage}) => {

    let pageArray = getPageArray(amountPages)

    return (
        <div className={amountPages > 1 ? 'pages' : 'pages_none'}>
            <button
                className="page_back"
            ></button>
            {pageArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page_current' : 'page'}
                >
                    {p}
                </span>
            )
            }
            <button className="page_next"></button>
        </div>
    );
};

export default Pagination;