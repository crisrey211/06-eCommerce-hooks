import React from 'react'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'

export function Cart() {
    const carCheckboxId = useId()
    return (
        <>
            <label htmlFor={carCheckboxId} className='cart-button'>
                <CartIcon />
            </label>
            <input id={carCheckboxId} type={'checkbox'} hidden />
            <aside className='cart'>
                <ul>
                    <li>
                        <img src='https://i.dummyjson.com/data/products/2/thumbnail.jpg' alt='iPhone' />
                        <div>
                            <strong>iPhone</strong> - $1499
                        </div>
                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
                <button><ClearCartIcon /></button>
            </aside>
        </>
    )
}
