import styled from "@emotion/styled";
import Link from "next/link";

export const Footers = styled.div`
  max-width: 900px;
  margin: 50px auto 0;
  border: 1px solid pink;
`;

export const FooterMenu = styled.ul`
  display: flex;
  list-style: none;
`;

export const FooterMenuList = styled.li`
  padding: 20px;
`;

// can't be styling
export const FooterMenuLink = styled(Link)``;
