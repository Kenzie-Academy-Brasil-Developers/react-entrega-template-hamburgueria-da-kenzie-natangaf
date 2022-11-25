import { StyledTypography } from "../../../BaseTypography/style";
import { Button } from "../../../buttons/";
import { StlyesProduct } from "./style";
export function CardCarts({ product }) {
  console.log(product);
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
          $ {product.price},00{" "}
        </StyledTypography>
        <Button nameButtons="bntOne">Adicionar</Button>
      </div>
    </StlyesProduct>
  );
}
