import React from 'react'
import "./Filters.css"

export function Filters() {
    const [minPrice, setMinPrice] = React.useState(0)

    const handleChangeMinPrice = (ev) => {
        setMinPrice(ev.target.value)
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor='price'>Precio a partir de:</label>
                <input
                    id='price'
                    type="range"
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                {minPrice}
            </div>

            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category">
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Móviles</option>
                    <option value="fragrances">Perfumes</option>
                </select>
            </div>

        </section>
    )
}
