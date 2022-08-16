import React from "react";
import Header from "../header";
import * as s from "./styled";

function Layout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <s.WrapperLayout>
      <Header />
      {children}
    </s.WrapperLayout>
  );
}

export default Layout;
