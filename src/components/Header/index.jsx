import { StyledTypography } from "../BaseTypography/style";
import { Form } from "./Form";
import { StyledHeader } from "./style";
export function Header() {
  return (
    <StyledHeader>
      <div>
        <StyledTypography tag="h1" classText="Heading3">
          {" "}
          Burger
        </StyledTypography>
        <Form></Form>
      </div>
    </StyledHeader>
  );
}
