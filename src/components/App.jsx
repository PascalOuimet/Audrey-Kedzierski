import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Proceedings from './Proceedings/Proceedings';
import Services from './Services/Services';
import Pricing from './Pricing/Pricing';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Link } from "gatsby"

import { PortfolioProvider } from '../context/context';

function App({lang, heroData, aboutData, contactData, footerData}) {  
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

  const switchLang = lang === "en" ? {url:"/", text:"FR"} : {url:"/en", text:"EN"}

  return (    
    <PortfolioProvider value={{ hero, about, contact, footer }}>
      <span className="cta-btn cta-btn--hero switchLang"><Link to={switchLang.url}>{switchLang.text}</Link></span>
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
