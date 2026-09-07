import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      services: "Services",
      providers: "Providers",
      contact: "Contact",
      signUp: "Sign Up",
      login: "Login",
      // Services
      ridesDrivers: "Rides / Drivers",
      deliveries: "Deliveries",
      roadsideAssistance: "Roadside Assistance",
      vehicleRental: "Vehicle Rental",
      apartmentRental: "Apartment Rental",
      // Providers
      becomeDriver: "Become Driver",
      becomeDeliveryProvider: "Become Delivery Provider",
      roadsideProvider: "Roadside Provider",
      listVehicle: "List Vehicle",
      listApartment: "List Apartment",
    }
  },
  ur: {
    translation: {
      home: "ہوم",
      about: "ہمارے بارے میں",
      services: "خدمات",
      providers: "سروس فراہم کنندگان",
      contact: "رابطہ کریں",
      signUp: "سائن اپ",
      login: "لاگ ان",
      // Services
      ridesDrivers: "سواری / ڈرائیورز",
      deliveries: "ڈیلیوری",
      roadsideAssistance: "روڈ سائیڈ امداد",
      vehicleRental: "گاڑی کرایہ پر",
      apartmentRental: "اپارٹمنٹ کرایہ پر",
      // Providers
      becomeDriver: "ڈرائیور بنیں",
      becomeDeliveryProvider: "ڈیلیوری پارٹنر بنیں",
      roadsideProvider: "روڈ سائیڈ سروس فراہم کنندہ",
      listVehicle: "گاڑی رجسٹر کریں",
      listApartment: "اپارٹمنٹ رجسٹر کریں",
    }
  },
  ar: {
    translation: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      providers: "مقدمو الخدمات",
      contact: "اتصل بنا",
      signUp: "تسجيل جديد",
      login: "تسجيل الدخول",
      // Services
      ridesDrivers: "الرحلات / السائقين",
      deliveries: "التوصيل",
      roadsideAssistance: "المساعدة على الطريق",
      vehicleRental: "تأجير السيارات",
      apartmentRental: "تأجير الشقق",
      // Providers
      becomeDriver: "كن سائقاً",
      becomeDeliveryProvider: "كن مندوب توصيل",
      roadsideProvider: "مزود خدمة الطريق",
      listVehicle: "أضف مركبتك",
      listApartment: "أضف شقتك",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;