import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Header from "./Components/Headr";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Footer2 from "./Components/Footer2"
import Nav2 from "./Components/Nav2Section"
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Nav2/>
      <Outlet /> 
      <Footer2/>
      <Footer />
    </>
  );
};

export default Layout;
