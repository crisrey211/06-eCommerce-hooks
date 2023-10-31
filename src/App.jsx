import React from "react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { IS_DEVELOPMENT } from "./config"
import { useFilters } from "./hooks/useFilters"
import { products as initialProducts } from "./mocks/products.json"

function App() {
  const { filterProducts, filters } = useFilters()

  const filteredProducts = filterProducts(initialProducts)
  return (
    <div>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </div>
  )
}

export default App
