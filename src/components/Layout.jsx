import Footer from "./Footer";
import Header from "./Header";

function Layout({children}) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
