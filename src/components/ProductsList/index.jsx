import { Product } from "./Product/";
import { StlyesList } from "./style";

export function ProductsList({ filteredProducts ,setCurrentSale }) {
  return (
    <StlyesList>
      {filteredProducts.map((product) => 
        <Product product={product} key={product.id}setCurrentSale={setCurrentSale}></Product>
      )}
    </StlyesList>
  );
}
