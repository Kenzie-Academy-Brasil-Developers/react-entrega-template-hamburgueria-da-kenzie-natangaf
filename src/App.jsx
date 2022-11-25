import { useEffect, useState } from "react";
import { getItens } from "./services/getItens";
import { PageHome } from "./pages/Home/index.jsx";
import { GlobalStyled } from "./Styles/GlobalStyled";
import { ResetCSS } from "./Styles/ResetCSS";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cart, SetCart] = useState(false);

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
      <ResetCSS />
      <GlobalStyled />
      <PageHome
        products={products}
        filteredProducts={filteredProducts}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        cart={cart}
        SetCart={SetCart}
      />
    </div>
  );
}

export default App;
