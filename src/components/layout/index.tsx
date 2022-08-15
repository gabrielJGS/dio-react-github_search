import React from "react";
import * as s from './styled';

function Layout({ children }: { children: JSX.Element[] }) {
  return (
    <s.WrapperLayout>
      <header>header</header>
      {children}
    </s.WrapperLayout>
  );
}

export default Layout;