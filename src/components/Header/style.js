import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 100%;
  div {
    margin: 0 auto;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 10px;
  }
  @media (min-width: 700px) {
   div{
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   }
  }
`;
