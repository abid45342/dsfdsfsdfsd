import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNav from "../components/layout-component/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 ">
        <LatestNews></LatestNews>
      </section>
<nav className="w-11/12 mx-auto ">
<Navbar></Navbar>
</nav>
<main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
<aside className="col-span-3"><LeftNavbar></LeftNavbar></aside>
<section className="col-span-6">main content
  <Outlet></Outlet>
</section>

<aside className=" col-span-3"><RightNav></RightNav></aside>
</main>
    

    </div>
  );
};

export default HomeLayout;
