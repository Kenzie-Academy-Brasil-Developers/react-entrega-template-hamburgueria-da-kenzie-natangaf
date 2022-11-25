import styled from "styled-components";

export const StlyesProduct= styled.li`
  list-style: none;
  width: 90%;
  height: 100px;
  background: var(--Color-grey-0);
  /* grey-100 */
  border: 2px solid var(--Color-grey-20);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  :hover {
    border: 2px solid var(--Color-gray-100);
  }
  img {
    background-color: var(--Color-grey-20);
    margin: 0 auto;
    height: 100%;
  }
  div {
    color: black;
    width: 55%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  button {
    height: 60px;
    width: 25%;
  }
`;
