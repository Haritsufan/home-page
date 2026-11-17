import React from "react";
import Hero from "../components/Hero";
import SolutionsOverview from "../components/SolutionsOverview";
import HiddenLogistics from "../components/HiddenLogistics";
import Clients from "../components/Clients";
import Articles from "../components/Articles";
import Contact from "../components/Contact";

export default function HomePage(){
  return (
    <div id="home-page">
      <Hero />
      <SolutionsOverview />
      <HiddenLogistics />
      <Clients />
      <Articles />
      <Contact />
    </div>
  );
}
