import styled from "styled-components";

export const StyledBody = styled.main`
  padding: 95.5px 200px;
  overflow: hidden;
  height: 100vh;
  .jelly-blob {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: 2px;
    border-color: white;
    border-radius: 50%;

    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    will-change: width, height, transform, border;
    z-index: 999;
    pointer-events: none;
  }
  /* Text Inside Jelly Blob */
  .inside-text {
    width: 10px;
    height: 10px;
    background: white;
    text-align: center;
    border-radius: 50%;
    font-weight: 600;
  }
  @media screen and (max-width: 800px) {
    padding: 25px;
    overflow: hidden;
  }
`;
