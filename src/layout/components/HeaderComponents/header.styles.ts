import styled from "@emotion/styled";
import Link from "next/link";

export const Nav = styled.div``;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavMenuList = styled.li`
  a {
    text-decoration: none;
  }
  padding: 20px;
`;

// can't be styling
export const NavMenuLink = styled(Link)``;
