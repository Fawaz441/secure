import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      {/* <EnterPresale /> */}
      <Footer />
    </div>
  );
};

export default Layout;
