import type { NextPage } from "next";
import Image from "next/image";
import { HomeLayout } from "../components";
import { Heading1, MediumSans } from "../styles/common";
import { HomeStyles } from "../styles/home";
import { white3 } from "../constants/constants";
import { menuItems } from "../constants";
import { ReactNode } from "react";
type MenuItemsProps = {
  icon: string;
  name: string;
};

const Home: NextPage = () => {
  return (
    <HomeLayout title="Home">
      <HomeStyles>
        <Heading1 color={white3}>
          <span>Hey</span> <span>There</span> <span>I </span> <span> am</span>
          <br />
          <span className="name">Bami</span>
        </Heading1>
        <div className="menu-wrapper">
          {menuItems.map(({ icon, name }: MenuItemsProps) => (
            <div className="menu" key={name}>
              <div className="menu-box">
                <div className="icon">
                  <Image alt={name} height={30} src={icon} width={30} />
                </div>
              </div>
              <MediumSans className="menu-name">{name}</MediumSans>
            </div>
          ))}{" "}
        </div>
      </HomeStyles>
    </HomeLayout>
  );
};

export default Home;
