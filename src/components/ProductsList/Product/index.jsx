import { StyledTypography } from "../../BaseTypography/style";
import { Button } from "../../buttons/";
import { StlyesProduct } from "./style";
export function Product({ product, setCurrentSale }) {
  function AddItenCart(product) {
    setCurrentSale(previosList=> [...previosList, product]);
  }
  return (
    <StlyesProduct>
      <img src={product.img} alt="" />
      <div>
        <StyledTypography tag="h2" classText="Heading3">
          {product.name}
        </StyledTypography>
        <StyledTypography tag="h4" classText="Caption">
          {product.category}
        </StyledTypography>
        <StyledTypography tag="h3" classText="Body600">
          $ {product.price},00
        </StyledTypography>
        <Button nameButtons="bntOne" callback={AddItenCart}>Adicionar</Button>
      </div>
    </StlyesProduct>
  );
}

