import React from 'react';
import { useCart } from '../hooks/useCart';
import { AddToCartIcon } from './Icons';
import "./Products.css";

export const Products = ({ products }) => {
    const { addToCart } = useCart()

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
                        <button onClick={() => addToCart(product)}>
                            <AddToCartIcon />
                        </button>
                    </li>
                )}
            </ul>
        </main>
    )
}
