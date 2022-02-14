import React from "react";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Hero from './components/hero.jsx';
import Features from './components/features.jsx';
import Services from './components/services.jsx';
import Video from './components/video.jsx';
import Pricing from './components/pricing.jsx'; 
import Download from './components/download.jsx';

const HomePage = () => {
  return (
    <>
    <Header />
    <Hero />
    <Features />
    <Services />
    <Video />
    <Pricing />
    <Download />
    <Footer />
    </>
  );
};

export default HomePage;
