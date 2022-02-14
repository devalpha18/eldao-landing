import React, { FC } from 'react';

import SEO from '../components/seo';
import HeroContainer from '../containers/hero';
import Forest from '../containers/Forest';
import Gaming from '../containers/Gaming';
import Roadmap from '../containers/Roadmap';
import CityDev from '../containers/CityDev';
import FAQ from '../containers/FAQ';
import Partner from '../containers/Partner';
import Contact from '../containers/Contact';
import Footer from '../layout/footer';
import { ForestContainer } from '../containers/Forest/forest.style';

const Index: FC = () => {
  return (
    <>
      <SEO title="EL DORADO" description="This is index page of EL DORADO" />
      <HeroContainer />
      <ForestContainer>
        <Forest />
        <Gaming />
        <Roadmap />
        <CityDev />
        <FAQ />
        <Partner />
        <Contact />
        <Footer />
      </ForestContainer>
    </>
  );
};

export default Index;
