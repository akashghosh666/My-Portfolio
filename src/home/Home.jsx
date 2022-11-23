import React from "react";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import "./home.css";

const Home = () => {
  return (
    <div class="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
