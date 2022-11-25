 import { CardCarts } from "./CardCarts";
import { StlyesList } from "./style";

export function ProductsListCart( {currentSale} ) {
  console.log(currentSale);
  return (
    <StlyesList>
      {currentSale.map((product) => 
        <CardCarts product={product} key={product.id}></CardCarts>
      )} 
    </StlyesList>
  );
}
