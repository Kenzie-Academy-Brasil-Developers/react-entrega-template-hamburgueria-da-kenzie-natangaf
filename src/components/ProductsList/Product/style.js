import styled from "styled-components";

export const StlyesProduct= styled.li`
  list-style: none;
  min-width: 300px;
  height: 350px;
  background: var(--Color-grey-0);
  /* grey-100 */
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  :hover {
    border: 2px solid var(--Color-gray-100);
  }
  img {
    margin: 0 auto;
    max-height: 40%;
  }
  div {
    height: 60%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  h3 {
    color: var(--Color-primary);
  }
  button {
    height: 48px;
    width: 50%;
  }
`;
