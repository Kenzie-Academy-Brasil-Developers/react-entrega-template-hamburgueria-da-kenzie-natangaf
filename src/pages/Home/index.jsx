import { MyCart } from "../../components/cart";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { StyleMain } from "./style";

export function PageHome({
  products,
  filteredProducts,
  currentSale,
  setCurrentSale,
  cart,
  SetCart,
}) {
  return (
    <>
      <Header />
      <StyleMain>
        <ProductsList
          filteredProducts={filteredProducts}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          SetCart={SetCart}
        />
        <MyCart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cart={cart}
          SetCart={SetCart}
        ></MyCart>
      </StyleMain>
    </>
  );
}
