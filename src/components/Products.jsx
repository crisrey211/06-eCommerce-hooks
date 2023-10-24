import React from 'react';
import { AddToCartIcon } from './Icons';
import "./Products.css";

export const Products = ({ products }) => {
    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map((product) =>
                    <li key={product.id}>
                        <img src={product.thumbnail} />
                        <div>
                            <strong>
                                {product.title}
                            </strong>
                            - {product.price}$
                        </div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </li>
                )}
            </ul>
        </main>
    )
}
