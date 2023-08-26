import { Footer } from "../../components/footer";
import { Header } from "./components/Header";
import { NewArrivals } from "./components/NewArrivals";
import { OurBlogs } from "./components/OurBlogs";
import { OurInstargram } from "./components/OurInstargram";
import { SideTable } from "./components/SideTable";
import { TopPickForYou } from "./components/TopPickForYou";

export const HomePage = () => {
  return (
    <div>
      <Header/>
      <SideTable/>
      <TopPickForYou/>
      <NewArrivals/>
      <OurBlogs/>
      <OurInstargram/>
      <Footer/>
    </div>
  );
};
