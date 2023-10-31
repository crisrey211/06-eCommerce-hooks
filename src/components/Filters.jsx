import React from 'react'
import { FilterContext } from '../context/filters'
import { useFilters } from '../hooks/useFilters'
import "./Filters.css"

export function Filters() {
    const [minPrice, setMinPrice] = React.useState(0)
    const minPriceFilterId = React.useId()
    const categoryFilterId = React.useId()
    const { filters, setFilters } = useFilters()

    const handleChangeMinPrice = (ev) => {
        setFilters(prevState => ({ ...prevState, minPrice: ev.target.value }))

    }

    const handleChangeCategory = (ev) => {
        setFilters(prevState => ({ ...prevState, category: ev.target.value }))

    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                    id={minPriceFilterId}
                    type="range"
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                {filters.minPrice}
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Móviles</option>
                    <option value="fragrances">Perfumes</option>
                </select>
            </div>

        </section>
    )
}
