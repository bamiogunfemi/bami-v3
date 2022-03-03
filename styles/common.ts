import styled from "styled-components";
import {
  white1,
  defaultFontFamily,
  white2,
  black1,
  background,
  secondaryFontFamily,
} from "../constants/constants";

export const Heading1 = styled.h1`
  font-family: ${defaultFontFamily};
  font-size: 68px;
  line-height: 91px;
  font-weight: 900;
  color: ${(props) => (props.color ? props.color : white1)};
  @media (max-width: 900px) {
    font-size: 42px;
    line-height: 55px;
  }
`;
export const Heading2 = styled.h2`
  font-style: normal;
  font-size: 40px;
  font-family: ${defaultFontFamily};
  margin-bottom: 0;
  line-height: 55px;
  letter-spacing: 0em;
  color: ${(props) => (props.color ? props.color : white1)};
  font-weight: 700;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 48px;
  }
`;
export const Heading3 = styled.h3`
  font-style: normal;
  font-family: ${defaultFontFamily};
  line-height: 42px;
  font-size: 30px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0em;
  color: ${(props) => (props.color ? props.color : white1)};
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
export const Heading4 = styled.h4`
  font-style: normal;
  font-family: ${defaultFontFamily};
  line-height: 42px;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  color: ${(props) => (props.color ? props.color : white1)};
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const SemiBoldSans = styled.p`
  font-style: normal;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : white1)};
  font-family: ${secondaryFontFamily};
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.01em;
`;
export const MediumSans = styled.p`
  font-style: normal;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : white1)};
  font-family: ${secondaryFontFamily};
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
`;
export const RegularSans = styled.p`
  font-style: normal;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : white1)};
  font-family: ${secondaryFontFamily};
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.03em;
`;
export const MediumTagSans = styled.p`
  font-style: normal;
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : white1)};
  font-family: ${secondaryFontFamily};
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
`;
export const ButtonTextSans = styled.p`
  font-style: normal;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : white1)};
  font-family: ${secondaryFontFamily};
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.01em;
`;
