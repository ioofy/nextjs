import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";
import MetaData from "@components/SEOComponents/seo";

const Button = styled.button`
 cursor: pointer;
 outline: none;
 border: none;
 font-size: 15px;
 padding: 8px;
 background: pink;
`;

const Header = styled.h1`
 text-align: center;
 padding: 20px;
`;

const NotFound = () => {
 return (
  <>
   <MetaData title="404 not found" />
   <Link href="/">
    <Button>Go back to homepages</Button>
   </Link>
   <Header className="font-xl">
    ...Oops, halaman yang kamu minta tidak ditemukan.
   </Header>
  </>
 );
};

export default NotFound;
