import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  width: 95%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 15px;
  align-items: center;
  background: #e0e0e0;
  /* grey-100 */
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  :hover {
    border: 2px solid #333333;
  }
  input {
    height: 70%;
    width: 70%;
    /* grey-100 */
    background: #e0e0e0;
    /* grey-100 */
    border: 2px solid transparent;
    border-radius: 8px;
  }
  input:focus {
    border: 2px solid transparent;
    color: #828282;
  }
`;
