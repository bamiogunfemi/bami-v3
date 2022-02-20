import Link from "next/link";
import { StyledHeader } from "./style";
import Image from "next/image";
import { DownloadButton } from "../Button";
export const HomeNavbar = () => {
  return (
    <StyledHeader>
      <div className="left">
        <Link href="/" passHref>
          <Image
            alt="bami's logo"
            height={22.63874053955078}
            className="logo"
            src="/images/logo.svg"
            width={20.666667938232422}
          />
        </Link>
      </div>
      <div className="right">
        <DownloadButton />
      </div>
    </StyledHeader>
  );
};
