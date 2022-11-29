import React from "react";
import Header from "../sections/header";
import Footer from "../sections/footer";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

//header e footer da aplicação
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
