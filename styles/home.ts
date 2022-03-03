import { MouseEventHandler } from "react";
import styled from "styled-components";
import { white2, black1, white1 } from "../constants/constants";
import { gsap, Power4 } from "gsap";

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
    color: ${white1};
  }
  h1 {
    margin-bottom: 0px;
  }
  .title {
    margin-top: 0px;
    margin-bottom: 48px;
  }
  .menu-wrapper {
    display: grid;
    grid-gap: 48px;
    grid-template-columns: repeat(5, 100px);
    align-content: space-between;
    justify-content: space-between;
    .menu {
      width: 80px;
      .menu-name {
        color: ${white2};
        opacity: 0;
      }
    }
    .menu-box {
      height: 80px;
      width: 80px;
      border-radius: 12px;
      margin-bottom: 24px;
      background-color: ${black1};

      .icon {
        justify-content: center;
        align-content: center;
        justify-items: center;
        display: grid;
        height: 100%;
      }
    }
  }
`;

export const onMenuItemEnter = ({ currentTarget }: MouseEventHandler | any) => {
  let img =
    currentTarget?.children[0].firstChild.children[0].firstChild.children[0];
  gsap.to(currentTarget?.children[0], { duration: 0.2, y: -10, opacity: 1 });
  gsap.to(img, {
    stagger: 0.5,
    scale: 1,
    height: 28.618927001953125,
    width: 31.354448318481445,
  });
  gsap.to(currentTarget?.children[1], {
    opacity: 1,
    stagger: 0.2,
    duration: 0.5,
    scale: 1,
    ease: Power4.easeIn,
  });
};

export const onMenuItemLeave = ({ currentTarget }: MouseEventHandler | any) => {
  let img =
    currentTarget?.children[0].firstChild.children[0].firstChild.children[0];
  gsap.to(currentTarget?.children[0], { duration: 0.1, y: 0, opacity: 1 });
  gsap.to(img, {
    height: 22.8951416015625,
    width: 25.08355712890625,
    scale: 0.5,
    ease: Power4.easeOut,
    stagger: 0.2,
  });
  gsap.to(currentTarget?.children[1], {
    duration: 0.1,
    ease: "none",
    opacity: 0,
  });
};
