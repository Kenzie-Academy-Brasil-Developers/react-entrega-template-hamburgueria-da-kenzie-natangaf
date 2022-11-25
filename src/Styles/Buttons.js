import styled, { css } from "styled-components";

export const StyledButtons = styled.button`
  cursor: pointer;
  ${({ nameButtons }) => {
    switch (nameButtons) {
      case "bntOne":
        return css`
          text-align: center;
          padding: 0px 20px;
          color: var(--Color-grey-0);
          background: var(--Color-primary);
          border: 2px solid var(--Color-primary);
          border-radius: 8px;
          :hover {
            background: var(--Color-primary-50);
            border: 2px solid var(--Color-primary-50);
          }
        `;
      case "bntTwo":
        return css`
          text-align: center;
          padding: 0px 20px;
          /* grey-100 */
          background: var(--Color-grey-20);
          /* grey-100 */
          border: 2px solid var(--Color-grey-20);
          border-radius: 8px;
          :hover {
            /* grey-300 */
            background: var(--Color-grey-50);
            /* grey-300 */
            border: 2px solid var(--Color-grey-50);
            border-radius: 8px;
          }
        `;
      case "bntTree":
        return css`
          background-color: transparent;
          text-align: center;
          border: 1px solid transparent;
          border-radius: 8px;
          color: var(--Color-grey-50);
          :hover {
            color: var(--Color-gray-100);
          }
        `;
    }
  }}
`;
