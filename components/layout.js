import Header from "./header";
import Footer from "./footer";

export default function layout({ children }) {
  return (
    <>
      <Header />
      
      <div>{children}</div>
      <Footer />
    </>
  );
}
