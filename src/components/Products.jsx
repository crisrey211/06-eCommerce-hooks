import React from 'react';
import { CartContext } from '../context/cart';
import { useCart } from '../hooks/useCart';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import "./Products.css";

export const Products = ({ products }) => {
    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = product => {
        return cart.some((item) => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map((product) => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        < li key={product.id} >
                            <img src={product.thumbnail} />
                            <div>
                                <strong>
                                    {product.title}
                                </strong>
                                - {product.price}$
                            </div>
                            <button
                                onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
                                style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                            >
                                {
                                    isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                                }
                            </button>
                        </li>)
                })}
            </ul>
        </main >
    )
}
