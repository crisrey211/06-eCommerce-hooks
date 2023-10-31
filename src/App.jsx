import React from "react"
import { Cart } from "./components/Cart"
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
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </div>
  )
}

export default App
