import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Product";
import TopProducts from "./Components/Topproducts/Topproduct";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonial";
import Footer from "./Components/Footer/Footer";

function App() {
  // Use useState to handle state, not useEffect
  const [orderpopup, setOrderpopup] = useState(false); // Fixed this line

  const handleorderpopup = () => {
    setOrderpopup(!orderpopup);
  };

  useEffect(() => {
    // Initialize AOS animation
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duartion-200">
        <Navbar handleorderpopup={handleorderpopup} />
        <Banner />
        <Hero handleorderpopup={handleorderpopup} />
        <Products/>
        <TopProducts />
        <Subscribe/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
