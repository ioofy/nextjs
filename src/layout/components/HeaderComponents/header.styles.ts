import styled from "@emotion/styled";
import Link from "next/link";

export const Nav = styled.div`
  max-width: 900px;
  margin: 0 auto 20px;
  border: 1px solid pink;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  font-weight: 600;
`;

export const NavMenuList = styled.li`
  padding: 20px;
`;

// can't be styling
export const NavMenuLink = styled(Link)``;
