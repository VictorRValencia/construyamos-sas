import React from "react";
import Testimonios from "../components/Testimonials";
import GaleriaFotos from "../components/PhotoGallery";
import ProjectMap from "../components/ProjectMap";
import ContactForm from "../components/ContactForm.jsx"; // Si ya lo tienes
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <Hero />
      <Testimonios />
      <GaleriaFotos />
      <ProjectMap />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
