import styled from "styled-components";

export const StlyesCart= styled.aside`
  list-style: none;
  min-width: 300px;
  height: 350px;
  background: #ffffff;
  /* grey-100 */
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  :hover {
    border: 2px solid #333333;
  }
  img {
    margin: 0 auto;
    max-height: 40%;
  }
  div {
    margin: 0 auto;
    width: 90%;
  }
  h3 {
    color: #27ae60;
  }
  button {
    width: 50%;
  }
`;
