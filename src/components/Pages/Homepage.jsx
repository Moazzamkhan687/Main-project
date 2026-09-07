import React, { useState, useEffect } from "react";
import Heroo from "../Homepage/Heroo";
import RentalHero from "../Homepage/RentalHero";
import ShortTermRental from "../Homepage/ShortTermRental";
import RideInterfaceView from "../Homepage/RideInterfaceView";
import Ourservices from "../Homepage/Ourservices";
import Algo from "../Homepage/Algo";
import Real from "../Homepage/Real";
import Algowork from "../Homepage/Algowork";
import Partner from "../Homepage/Partner";
import Question from "../Homepage/Question";

const Homepage = () => {
  // Active views: 'home' | 'ride' | 'rental' | 'shortTerm'
  const [activeView, setActiveView] = useState('home');

  // Smooth scroll to Our Services helper
  const scrollToServices = () => {
    setTimeout(() => {
      const element = document.getElementById("ourservices-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  // Browser Back Button handler
  useEffect(() => {
    const handlePopState = () => {
      setActiveView('home');
      scrollToServices();
    };

    if (activeView !== 'home') {
      window.history.pushState({ view: activeView }, "");
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [activeView]);

  const handleOpenView = (viewName) => {
    setActiveView(viewName);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToServices = () => {
    if (window.history.state?.view) {
      window.history.back();
    } else {
      setActiveView('home');
      scrollToServices();
    }
  };

  const handleBackToHomeTop = () => {
    if (window.history.state?.view) {
      window.history.back();
    } else {
      setActiveView('home');
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  // 1. Explore Click View (Book a Ride & Become a Driver)
  if (activeView === 'ride') {
    return (
      <div className="w-full">
        <RideInterfaceView onBack={handleBackToHomeTop} />
      </div>
    );
  }

  // 2. Rental Hero View (Commercial Truck Fleet)
  if (activeView === 'rental') {
    return (
      <div className="w-full">
        <RentalHero onBack={handleBackToHomeTop} />
      </div>
    );
  }

  // 3. See More View (Short-Term Rentals)
  if (activeView === 'shortTerm') {
    return (
      <div className="w-full">
        <ShortTermRental onBack={handleBackToServices} />
      </div>
    );
  }

  // 4. Default Homepage
  return (
    <div className="w-full">
      <Heroo onExplore={() => handleOpenView('ride')} />
      <Ourservices onSeeMore={() => handleOpenView('shortTerm')} />
      <Algo />
      <Real />
      <Algowork />
      <Partner />
      <Question />
    </div>
  );
};

export default Homepage;