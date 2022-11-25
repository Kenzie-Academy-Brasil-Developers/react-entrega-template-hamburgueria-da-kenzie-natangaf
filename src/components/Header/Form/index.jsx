
import { useState } from "react";
import { StyledButtons } from "../../../Styles/Buttons";
import { StyledForm } from "./style";

export function Form({ callBack }) {
  const  [focus,setFocus]= useState(false)
  return (
    <StyledForm onSubmit={() => {}} focus={focus}>
      <input placeholder="Digitar Pesquisa" onFocus={()=>setFocus(!focus)}  onBlur={()=>setFocus(false)}/>
      <StyledButtons type="submit" nameButtons="bntOne">
        Pesquisar
      </StyledButtons>
    </StyledForm>
  );
}
