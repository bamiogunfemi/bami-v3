import { MouseEventHandler } from "react";
import styled from "styled-components";
import { black1, white1 } from "../../constants";
import { gsap } from "gsap";

const downloadIcon = "#download-icon";
const downloadedIcon = "#downloaded-icon";
const downloadText = "#download-text";
const downloadedText = "#downloaded-text";

export const StyledDownloadButton = styled.button`
  height: 75px;
  width: 247px;
  background: inherit;
  border-radius: 5px;
  border: 2px solid ${white1};
  #text-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  #downloaded-icon,
  #downloaded-text,
  #downloaded-icon-container {
    display: none;
  }

  span {
    overflow: visible !important;
  }
`;

export const onDownloadResumeClick = ({
  currentTarget,
}: MouseEventHandler | any) => {
  gsap
    .timeline()
    .to(downloadIcon, { duration: 0.25, y: 25, ease: "easeOut" })
    .to(downloadIcon, { duration: 0.25, y: -25, ease: "easeIn" })
    .to(downloadIcon, { duration: 0.25, y: 25, ease: "easeOut" })
    .to(downloadIcon, { duration: 0.25, y: -25, ease: "easeIn" })
    .to(downloadIcon, { duration: 0.25, y: 25, ease: "easeOut" })
    .to(downloadIcon, { duration: 0.25, y: -25, ease: "easeIn" })
    .to(downloadIcon, { duration: 0.25, y: 25, ease: "easeOut" })
    .to(downloadIcon, { duration: 0.25, y: -25, ease: "easeIn" })
    .to(downloadIcon, { duration: 0.25, y: 0 })
    .to(downloadText, { duration: 0.0, display: "none" })
    .to("#downloaded-icon-container", {
      duration: 0.0,
      display: "inline-block",
    })
    .to(downloadIcon, { duration: 0, display: "none", ease: "easeOut" })
    .to(downloadedIcon, { duration: 0.1, display: "inline", y: 0, opacity: 1 })
    .to(currentTarget, {
      duration: 0.2,
      width: 75,
      height: 75,
      borderRadius: "100px",
    })
    .to(currentTarget, {
      duration: 0.1,
      height: 75,
      width: 187,
      borderRadius: "100px",
    })
    .to(downloadedIcon, { duration: 0.5, x: -89, y: 4.5 })
    .to(downloadedText, {
      duration: 0.5,
      opacity: 1,
      position: "absolute",
      display: "inline",
      x: 3,
      y: -9,
    })
    .to(currentTarget, {
      cursor: "not-allowed",
      pointerEvents: "none",
    });
  gsap.timeline().kill();
};
const onMouseOver = ({ currentTarget }: MouseEventHandler | any) => {
  gsap.to(downloadText, {
    color: black1,
  });
  gsap.to(currentTarget, {
    boxShadow: `inset 247px 0 0 0 ${white1}`,
    transition: 0.5,
  });
  gsap.to(downloadIcon, {
    color: black1,
  });
};
const onMouseOut = ({ currentTarget }: MouseEventHandler | any) => {
  gsap.to(downloadText, {
    color: white1,
  });
  gsap.to(downloadIcon, {
    color: white1,
  });
  gsap.to(currentTarget, {
    boxShadow: `inset  0 0 0 247px ${black1}`,
    transition: 0.5,
  });
};
