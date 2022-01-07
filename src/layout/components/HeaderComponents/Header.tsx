import React from "react";
import { Nav, NavMenu, NavMenuLink, NavMenuList } from "./header.styles";
import { data } from "./constant";

const Header = () => {
  return (
    <Nav className="navbar">
      <NavMenu>
        {data.map((nav) => {
          return (
            <NavMenuList key={nav.id} className="font-md">
              <NavMenuLink href={nav.route}>{nav.name}</NavMenuLink>
            </NavMenuList>
          );
        })}
      </NavMenu>
    </Nav>
  );
};

export default Header;
