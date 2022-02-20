import { ReactNode } from "react";
import Head from "next/head";
import { HomeNavbar } from "../index";
import { StyledBody } from "./style";
type HomeLayoutProps = {
  children: ReactNode;
  title?: string;
};

export const HomeLayout = ({ children, title }: HomeLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | Bami Ogunfemi`}</title>
        <meta name="description" content="Frontend Engineer" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <StyledBody>
        <HomeNavbar />
        {children}
      </StyledBody>
    </>
  );
};
