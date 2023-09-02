import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { useState } from "react";

function App() {
  const [products] = useState(initialProducts);
  const [filters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = () => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || filters.category === product.category)
      );
    });
  };

  const filteredProducts = filterProducts();

  return <Products products={filteredProducts} />;
}

export default App;
