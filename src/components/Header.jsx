import React from 'react'
import { Filters } from './Filters'

export function Header({ changeFilters }) {
    return (
        <header>
            <h1>Shopping cart 🛒</h1>
            <Filters onChange={changeFilters} />
        </header>
    )
}
