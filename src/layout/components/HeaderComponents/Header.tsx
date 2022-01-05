import React from "react";
import { Nav, NavMenu, NavMenuLink, NavMenuList } from "./header.styles";
import { data } from "./constant";

const Header = () => {
  return (
    <Nav>
      <NavMenu>
        {data.map((nav) => {
          return (
            <NavMenuList key={nav.id}>
              <NavMenuLink href={nav.route}>{nav.name}</NavMenuLink>
            </NavMenuList>
          );
        })}
      </NavMenu>
    </Nav>
  );
};

export default Header;
