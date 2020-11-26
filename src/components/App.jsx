import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Process from './Process/Process';
import Services from './Services/Services';
import Pricing from './Pricing/Pricing';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Link } from "gatsby"

import { PortfolioProvider } from '../context/context';

function App({lang, heroData, processData, servicesData, pricingData, aboutData, contactData}) {  
  const [hero, setHero] = useState({});
  const [process, setProcess] = useState({});
  const [services, setServices] = useState({});
  const [pricing, setPricing] = useState({});
  const [about, setAbout] = useState({});  
  const [contact, setContact] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setProcess({ ...processData });
    setServices({ ...servicesData });
    setPricing({ ...pricingData });
    setAbout({ ...aboutData });    
    setContact({ ...contactData });    
  }, []);

  const switchLang = lang === "en" ? {url:"/", text:"FR"} : {url:"/en", text:"EN"}

  return (    
    <PortfolioProvider value={{ hero, process, services, pricing, about, contact }}>
      <span className="cta-btn cta-btn--hero switchLang"><Link to={switchLang.url}>{switchLang.text}</Link></span>
      <Hero />
      <Process />
      <Services />
      <Pricing />
      <About />      
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
