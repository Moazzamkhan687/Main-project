import React, { useState, useEffect } from "react";
import Hero from "../Aboutpage/Hero";
import Story from "../Aboutpage/Story";
import Mission from "../Aboutpage/Mission";
import Services from "../Aboutpage/Services";
import Model from "../Aboutpage/Model";
import VehicleRentalView from "../Aboutpage/VehicleRentalView";
import DeliveryView from "../Aboutpage/DeliveryView";
import ApartmentRentalView from "../Aboutpage/ApartmentRentalView";
import PackageDeliveryView from "../Aboutpage/PackageDeliveryView";

const Aboutpage = ({ onContactClick, onOpenSignUp, onOpenLogin }) => {
  const [activeView, setActiveView] = useState("about");

  // Browser Back Button for Sub-Views
  useEffect(() => {
    const handlePopState = (e) => {
      const state = e.state || {};
      if (activeView !== "about") {
        setActiveView(state.view || "about");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [activeView]);

  const openSubView = (viewName) => {
    window.history.pushState({ view: viewName, page: "about" }, "");
    setActiveView(viewName);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToAbout = () => {
    if (window.history.state?.view) {
      window.history.back();
    } else {
      setActiveView("about");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  // Sub-Views Render
  if (activeView === "rental") {
    return (
      <div className="w-full">
        <VehicleRentalView onBack={handleBackToAbout} />
      </div>
    );
  }

  if (activeView === "delivery") {
    return (
      <div className="w-full">
        <DeliveryView onBack={handleBackToAbout} />
      </div>
    );
  }

  if (activeView === "apartment") {
    return (
      <div className="w-full">
        <ApartmentRentalView onBack={handleBackToAbout} />
      </div>
    );
  }

  if (activeView === "package") {
    return (
      <div className="w-full">
        <PackageDeliveryView onBack={handleBackToAbout} />
      </div>
    );
  }

  // Default About Page View
  return (
    <div className="w-full relative">
      <Hero 
        onViewMore={() => openSubView("delivery")} 
        onContactClick={onContactClick} 
      />
      <Story />
      <Mission />
      <Services 
        onOpenRental={() => openSubView("rental")} 
        onOpenApartment={() => openSubView("apartment")}
        onOpenPackage={() => openSubView("package")}
      />
      <Model 
        onOpenSignUp={onOpenSignUp} 
        onOpenLogin={onOpenLogin} 
      />
    </div>
  );
};

export default Aboutpage;