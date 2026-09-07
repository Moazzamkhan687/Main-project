import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/commonpage/Navbar/Navbar';
import Footer from './components/commonpage/Footer/footer';
import Homepage from './components/Pages/Homepage';
import Aboutpage from './components/Pages/Aboutpage';
import Contactpage from './components/Pages/Contactpage';
import RidesDriversView from './components/Pages/RidesDriversView';
import DeliveriesView from './components/Pages/DeliveriesView';
import RoadsideAssistanceView from './components/Pages/RoadsideAssistanceView';
import VehicleRentalView from './components/Pages/VehicleRentalView';
import ApartmentRentalView from './components/Pages/ApartmentRentalView';
import SignUpModal from './components/Aboutpage/SignUpModal';
import LoginModal from './components/Aboutpage/LoginModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (!window.history.state) {
      window.history.replaceState({ page: 'home' }, '');
    }

    const handlePopState = (event) => {
      if (activeModal) {
        setActiveModal(null);
        return;
      }

      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeModal]);

  const handleNavigate = (pageName) => {
    window.history.pushState({ page: pageName }, '');
    setCurrentPage(pageName);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenSignUp = () => {
    window.history.pushState({ modal: 'signup', page: currentPage }, '');
    setActiveModal('signup');
  };

  const handleOpenLogin = () => {
    window.history.pushState({ modal: 'login', page: currentPage }, '');
    setActiveModal('login');
  };

  const handleCloseModal = () => {
    if (window.history.state?.modal) {
      window.history.back();
    } else {
      setActiveModal(null);
    }
  };

  const handleGoToContact = () => {
    handleNavigate('contact');
  };

  const handleBackToAbout = () => {
    handleNavigate('about');
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={handleNavigate}
        onSignUpClick={handleOpenSignUp}
        onLoginClick={handleOpenLogin}
      />

      <main className="w-full flex-grow">
        {currentPage === 'home' && <Homepage />}
        {currentPage === 'about' && (
          <Aboutpage 
            onContactClick={handleGoToContact}
            onOpenSignUp={handleOpenSignUp}
            onOpenLogin={handleOpenLogin}
          />
        )}
        {currentPage === 'contact' && <Contactpage onBack={handleBackToAbout} />}
        {currentPage === 'rides' && (
          <RidesDriversView 
            onOpenSignUp={handleOpenSignUp}
            onOpenLogin={handleOpenLogin}
          />
        )}
        {currentPage === 'deliveries' && (
          <DeliveriesView 
            onOpenSignUp={handleOpenSignUp}
            onOpenLogin={handleOpenLogin}
          />
        )}
        {currentPage === 'roadside' && (
          <RoadsideAssistanceView 
            onOpenSignUp={handleOpenSignUp}
            onOpenLogin={handleOpenLogin}
          />
        )}
        {currentPage === 'rental' && (
          <VehicleRentalView 
            onOpenSignUp={handleOpenSignUp}
            onOpenLogin={handleOpenLogin}
          />
        )}
        {currentPage === 'apartment' && (
          <ApartmentRentalView 
            onOpenSignUp={handleOpenSignUp}
            onOpenLogin={handleOpenLogin}
          />
        )}
      </main>

      <Footer />

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'signup' && (
          <SignUpModal 
            onClose={handleCloseModal} 
            onSwitchToLogin={handleOpenLogin} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeModal === 'login' && (
          <LoginModal 
            onClose={handleCloseModal} 
            onSwitchToSignUp={handleOpenSignUp} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;