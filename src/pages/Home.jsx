import React from "react";
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import News_letter from "../components/News_letter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Annoucement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <News_letter />
      <Footer/>
    </div>
  );
};

export default Home;
