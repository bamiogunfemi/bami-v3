import styled from "styled-components";

export const StyledHeader = styled.nav`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  align-content: space-around;
  justify-content: space-between;

  .left {
    grid-column: 1 / 2;
    grid-row: 1;
    margin: auto 0;
  }
  .right {
    grid-column: 5/ 5;
    grid-row: 1;
  }
`;
