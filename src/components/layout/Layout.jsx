/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main-content min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
