import React from "react";
import Header from "../_components/Header";
import Hero from "../_components/Hero";
import Events from "../_components/Events";
import Hub from "../_components/Hub";
import Creaters from "../_components/Creaters";
import Join from "../_components/Join";
import CreateEvent from "../_components/CreateEvent";
import WhoWeAre from "../_components/WhoWeAre";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      <Events />
      <Hub />
      <Creaters />
      <Join />
      <CreateEvent/>
      <WhoWeAre/>
      {children}
    </div>
  );
};

export default HomeLayout;
