export interface Product {
    id: number,
    name: string,
    img: string,
    unit: string,
    size: number | string,
    barcode: number,
    manufacturer: string,
    brand: string,
    desc: string,
    price: number,
    type: string[]
}

export interface TypesCare {
    [key:string]: string;
}

export interface TypesPrice {
    min: number,
    max: number
}

export interface defaultFilterTypes {
    price: {
        min: number,
        max: number,
    },
    manufacturer: string[],
    type: string,
}