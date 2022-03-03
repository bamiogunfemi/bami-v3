import Link from "next/link";
import { StyledHeader } from "./style";
import Image from "next/image";
import { DownloadButton } from "../Button";
export const HomeNavbar = () => {
  return (
    <StyledHeader>
      <div className="left">
        <Link href="/" passHref>
          <>
            {" "}
            <Image
              alt="bami's logo"
              height={32}
              className="logo"
              src="/images/logo.svg"
              width={37.33}
            />
          </>
        </Link>
      </div>
      <div className="right">
        <DownloadButton />
      </div>
    </StyledHeader>
  );
};
