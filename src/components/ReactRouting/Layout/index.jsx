import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

function Layout() {
  return (
    <>
      {/* We can do Nesting by using Outlet */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
