import styled, { css } from "styled-components";

export const StyledButtons = styled.button`
  cursor: pointer;
  ${({ nameButtons }) => {
    switch (nameButtons) {
      case "bntOne":
        return css`
          text-align: center;
          padding: 0px 20px;
          color: #ffffff;
          /* color-primary */
          background: #27ae60;
          /* color-primary */
          border: 2px solid #27ae60;
          border-radius: 8px;
          :hover {
            /* color-primary-50 */
            background: #93d7af;
            /* color-primary-50 */
            border: 2px solid #93d7af;
          }
        `;
      case "bntTwo":
        return css`
          text-align: center;
          padding: 0px 20px;
          /* grey-100 */
          background: #e0e0e0;
          /* grey-100 */
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          :hover {
            /* grey-300 */
            background: #828282;
            /* grey-300 */
            border: 2px solid #828282;
            border-radius: 8px;
          }
        `;
    }
  }}
`;
