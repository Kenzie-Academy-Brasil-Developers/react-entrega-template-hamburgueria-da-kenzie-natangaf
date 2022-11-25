import { Button } from "../../buttons";
import { StyledForm } from "./style";

export function Form({ callBack }) {
  return (
    <StyledForm onSubmit={() => {}}>
      <input placeholder="Digitar Pesquisa" />
      <Button type="submit" nameButtons="bntOne">
        Pesquisar
      </Button>
    </StyledForm>
  );
}
