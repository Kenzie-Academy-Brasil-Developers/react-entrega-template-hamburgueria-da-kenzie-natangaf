import { StyledTypography } from "../BaseTypography/style";
import { StyledButtons } from "./style";

export function Button({ nameButtons, children, callback }) {
  return (
    <StyledButtons nameButtons={nameButtons} onClick={callback}>
      <StyledTypography tag="p">{children}</StyledTypography>
    </StyledButtons>
  );
}
