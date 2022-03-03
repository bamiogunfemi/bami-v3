import { ButtonTextSans } from "../../styles/common";
import { StyledDownloadButton, onDownloadResumeClick } from "./style";
import Image from "next/image";
import { images } from "../../constants";

export const DownloadButton = () => {
  return (
    <a href="https://docs.google.com/document/d/1Cxp_LPewDUDYscDAWrNZFo28BkAl9L3p9KqvFjjEJPk/export?format=pdf">
      <StyledDownloadButton onClick={onDownloadResumeClick}>
        <ButtonTextSans id="text-container">
          <span>
            <span id="download-text"> Download my Resume</span>
            <span id="downloaded-text"> Downloaded!</span>
          </span>
          <span>
            <Image
              alt="download"
              height={13}
              id="download-icon"
              src={images.download}
              width={9.500000953674316}
            />
            <span id="downloaded-icon-container">
              <Image
                alt="download"
                height={24}
                id="downloaded-icon"
                src={images.downloaded}
                width={24}
              />
            </span>
          </span>
        </ButtonTextSans>{" "}
      </StyledDownloadButton>
    </a>
  );
};
