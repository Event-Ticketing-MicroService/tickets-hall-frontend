import React from "react";
import LandingPageNavBar from "./components/navbar/LandingPageNavBar";
import MainPage from "./components/body/MainPage";
import FeaturedEvents from "./components/body/FeaturedEventsPage";
import HowItWorks from "./components/body/HowItWorks";
import CallToAction from "./components/body/CallToAction";
import Footer from "./components/body/Footer";

export default function LandingPage() {

  //To Do Fetch Logic

  return (
    <div className="scroll-smooth">
      <LandingPageNavBar />
      <MainPage />
      <FeaturedEvents />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
}
