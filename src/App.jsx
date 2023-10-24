import React from "react"
import { Header } from "./components/Header"
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
      <Header />
      <Products products={filteredProducts} />
    </div>
  )
}

export default App
