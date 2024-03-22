import { PropsWithChildren } from "react";
import Header from "../header/header";
import ScreenTexture from "../screen-texture/screen-texture";
import "./layout.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="main-page">{children}</div>
      <ScreenTexture />
    </>
  );
};

export default Layout;
