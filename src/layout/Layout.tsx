import React, { ReactNode } from "react";
import Footer from "./components/FooterComponents/footer";
import Header from "./components/HeaderComponents/header";

interface LayoutProps {
 children: ReactNode;
}

const Layout = (props: LayoutProps) => {
 const { children } = props;

 return (
  <React.Fragment>
   <Header />
   <div className="container">{children}</div>
   <Footer />
  </React.Fragment>
 );
};

export default Layout;
