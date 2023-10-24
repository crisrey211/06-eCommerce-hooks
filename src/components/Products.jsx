import React from 'react';
import { AddToCartIcon } from './Icons';
import "./Products.css";

export const Products = ({ products }) => {
    console.log(products);
    return (
        <main className='products'>
            <ul>
                {products.map((product) =>
                    <li key={product.id}>
                        <img src={product.thumbnail} />
                        <strong>
                            <div>{product.title}</div>
                        </strong>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </li>
                )}
            </ul>
        </main>
    )
}
