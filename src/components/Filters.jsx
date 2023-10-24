import React from 'react'
import "./Filters.css"

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = React.useState(0)

    const handleChangeMinPrice = (ev) => {
        setMinPrice(ev.target.value)
        onChange(prevState => ({ ...prevState, minPrice: ev.target.value }))

    }

    const handleChangeCategory = (ev) => {
        onChange(prevState => ({ ...prevState, category: ev.target.value }))

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
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Móviles</option>
                    <option value="fragrances">Perfumes</option>
                </select>
            </div>

        </section>
    )
}
