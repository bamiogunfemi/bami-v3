import styled from "styled-components";
import {
  white1,
  defaultFontFamily,
  white2,
  black1,
  background,
  white3,
} from "../constants/constants";

export const HomeStyles = styled.section`
  display: grid;
  justify-content: center;
  text-align: center;
  height: 100%;
  align-content: center;
  span:hover {
    color: ${white2};
  }
  .name {
    color: ${white2};
  }
  .menu-wrapper {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(5, 120px);
    align-content: space-between;
    justify-content: space-between;
    .menu-box {
      height: 80px;
      width: 80px;
      border-radius: 12px;
      background-color: ${black1};
      .icon {
        justify-content: center;
        align-content: center;
        justify-items: center;
        display: grid;
        height: 100%;
      }
    }
    .menu-name {
      width: 80px;
    }
  }
`;
