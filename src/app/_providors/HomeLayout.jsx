import React from "react";
import Header from "../_components/Header";
import Hero from "../_components/Hero";
import Events from "../_components/Events";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      <Events />
      {children}
    </div>
  );
};

export default HomeLayout;
