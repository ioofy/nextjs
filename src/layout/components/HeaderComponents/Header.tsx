import React from "react";
import { Nav, NavMenu, NavMenuLink, NavMenuList } from "./header.styles";
import { data } from "./constant";

const Header = () => {
 return (
  <Nav className="navbar">
   <NavMenu>
    {data.map((navbar) => {
     return (
      <NavMenuList key={navbar.id} className="font-md">
       <NavMenuLink href={navbar.route}>{navbar.name}</NavMenuLink>
      </NavMenuList>
     );
    })}
   </NavMenu>
  </Nav>
 );
};

export default Header;
