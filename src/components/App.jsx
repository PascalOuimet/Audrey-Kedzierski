import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Proceedings from './Proceedings/Proceedings';
import Services from './Services/Services';
import Pricing from './Pricing/Pricing';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});  
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });    
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, contact, footer }}>
      <Hero />
      <Proceedings />
      <Services />
      <Pricing />
      <About />      
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
