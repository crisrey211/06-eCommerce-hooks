import React from "react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { IS_DEVELOPMENT } from "./config"
import { products as initialProducts } from "./mocks/products.json"

function useFilters() {
  const [filters, setFilters] = React.useState({
    category: "all",
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return product.price >= filters.minPrice && (product.category === filters.category || filters.category === "all")
    })
  }
  return { setFilters, filterProducts, filters }
}


function App() {
  const [products] = React.useState(initialProducts)
  const { filterProducts, setFilters, filters } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <div>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </div>
  )
}

export default App
