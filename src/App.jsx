import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import CoverSection from "./components/CoverSection/CoverSection.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
      <CoverSection />
      <Footer />
    </div>
  );
};

export default App;
