import React from "react";
import Header from "../_components/Header";
import Hero from "../_components/Hero";
import Events from "../_components/Events";
import Hub from "../_components/Hub";
import Creaters from "../_components/Creaters";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      <Events />
      <Hub />
      <Creaters/>
      {children}
    </div>
  );
};

export default HomeLayout;
