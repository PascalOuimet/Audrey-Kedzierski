import React from 'react';
import Hero from './Hero/Hero';
import Process from './Process/Process';
import Services from './Services/Services';
import Pricing from './Pricing/Pricing';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Link } from "gatsby"

const App = ({lang, heroData, processData, servicesData, pricingData, aboutData, contactData, footerData}) => {  

  const switchLang = lang === "en" ? {url:"/", text:"FR"} : {url:"/en", text:"EN"}

  return (    
    <>
      <Link className="cta-btn cta-btn--hero switchLang" to={switchLang.url}>{switchLang.text}</Link>
      <Hero hero={heroData} process={processData} pricing={pricingData} about={aboutData} />
      <Process data={processData} />
      <Services data={servicesData} />
      <Pricing data={pricingData} />
      <About data={aboutData} />      
      <Contact data={contactData} />
      <Footer data={footerData} />
    </>
  );
}

export default App;
