import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData, heroData, processData, servicesData, pricingData, aboutData, contactData, footerData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App lang={lang} heroData={heroData} processData={processData} servicesData={servicesData} pricingData={pricingData} aboutData={aboutData} contactData={contactData} footerData={footerData} />
    </>
  );
};
