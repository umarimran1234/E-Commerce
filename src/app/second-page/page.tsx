import Footer from "@/components/Footer/Footer";
import LayoutShift from "@/components/LayoutShift/LayoutShift";
import Navbar from "@/components/Navbar/Navbar";
import Navigation from "@/components/Navigation/Navigation";
import FilterSidebar from "@/components/Sidebar/FilterSidebar";
import Subscribe from "@/components/subscribe/Subscribe";

function SecondPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex justify-center md:gap-8">
          <FilterSidebar />
          <div className="md:w-9/12">
            <LayoutShift />
            <Navigation />
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default SecondPage;
