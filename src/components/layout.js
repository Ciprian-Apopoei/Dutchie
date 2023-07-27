import Header from "./header";
import Footer from "./footer";
import SEO from "./SEO";

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
