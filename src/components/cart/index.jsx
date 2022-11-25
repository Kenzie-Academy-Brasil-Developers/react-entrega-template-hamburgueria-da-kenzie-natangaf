import { StlyesCart } from "./style";
import { StyledTypography } from "../BaseTypography/style";
import { ProductsListCart } from "./ListCart/";
import { Button } from "../buttons/";
export function MyCart({ currentSale }) {
  return (
    <StlyesCart>
      <div>
        <StyledTypography tag="h2" classText="Heading3">
          Carrinho
        </StyledTypography>
        <ProductsListCart currentSale={currentSale} />
        <Button nameButtons="bntOne" >Remover todos os Itens</Button>
      </div>
    </StlyesCart>
  );
}
