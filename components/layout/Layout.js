import Footer from "./footer";
import NavBar from "./navbar";

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
