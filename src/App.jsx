import React from "react"
import { Products } from "./components/Products"
import { products as initialProducts } from "./mocks/products.json"

function App() {
  const [products] = React.useState(initialProducts)
  const [filters, setFilters] = React.useState({
    category: "all",
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return product.price >= filters.minPrice && (product.category === filters.category || filters.category === "all")
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <div>
      <h1>Shopping cart 🛒</h1>
      <Products products={filteredProducts} />
    </div>
  )
}

export default App
