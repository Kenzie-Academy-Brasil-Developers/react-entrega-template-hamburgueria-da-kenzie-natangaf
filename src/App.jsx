import "./App.css";
import { useEffect, useState } from "react";
import { getItens } from "./services/getItens";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList/";
import { MyCart } from "./components/cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    async function get() {
      const listProducts = await getItens();
      setProducts(listProducts.data);
      setFilteredProducts(listProducts.data);
    }
    get();
  }, []);
  return (
    <div className="container">
      <Header />
      <ProductsList filteredProducts={filteredProducts} setCurrentSale={setCurrentSale} />
      <MyCart currentSale={currentSale}></MyCart>
    </div>
  );
}

export default App;
