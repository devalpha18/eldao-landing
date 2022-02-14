import React, { FC, useEffect, useState } from 'react';

import { Backmountain, BackRainbow, TopText, TempleSection, BuildingDiv } from './styled';

const HeroContainer: FC = () => {
  const [backscrollstate, setBackscroll] = useState(0);

  const handleScroll = () => {
    setBackscroll(window.scrollY * -0.2);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <BuildingDiv>
        <TopText>El DoradO</TopText>
      </BuildingDiv>
      <BackRainbow />
      <TempleSection>
        <Backmountain transform={backscrollstate} />
      </TempleSection>
    </>
  );
};

export default HeroContainer;
