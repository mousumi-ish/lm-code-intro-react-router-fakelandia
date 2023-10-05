import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

const MainLayout = () => (
  <>
    <Header />
    <main className="p-6" style={{ flex: "1" }}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
