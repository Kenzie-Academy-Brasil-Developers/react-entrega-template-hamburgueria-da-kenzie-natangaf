import styled from "styled-components";

export const StlyesCart = styled.aside`
  width: 100%;
  height: 100%;
  background: var(--Color-primary);
  color: var(--Color-grey-0);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  span {
    padding: 22px;
    margin: 0 auto;
    width: 90%;
  }
  div > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
    height: 48px;
    width: 100%;
  }
  @media (min-width: 700px) {
    margin: 30px 0;
    width: 30%;
  }
`;
