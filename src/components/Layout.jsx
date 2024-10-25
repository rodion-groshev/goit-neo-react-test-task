import { Suspense } from "react";
import AppBar from "./AppBar/Appbar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
