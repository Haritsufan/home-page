import React from "react";
import AboutIntro from "../components/AboutIntro";
import AboutFacts from "../components/AboutFacts";
import AboutStory from "../components/AboutStory";
import AboutValues from "../components/AboutValues";
import AboutNetwork from "../components/AboutNetwork";
import AboutClients from "../components/AboutClients";
import AboutContact from "../components/AboutContact";

export default function AboutPage(){
  return (
    <div id="about-page">
      <AboutIntro />
      <AboutFacts />
      <AboutStory />
      <AboutValues />
      <AboutNetwork />
      <AboutClients />
      <AboutContact />
    </div>
  );
}
