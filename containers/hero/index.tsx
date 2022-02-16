import React, { FC, useEffect, useState } from 'react';
import { BsTwitter, BsGithub, BsMedium } from 'react-icons/bs';
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import { useMediaQuery } from 'beautiful-react-hooks';
import { SiGitbook } from 'react-icons/si';

import Header from '../../layout/header';
import { Backmountain1, Backmountain2, Backmountain3, Backmountain4, SideItems, InMobile, SideItemsOut, BackRainbow, TempleSection, BuildingDiv } from './styled';

const HeroContainer: FC = () => {
  const [backscrollstate, setBackscroll] = useState(0);
  const [backscrollstate1, setBackscroll1] = useState(0);
  const [backscrollstate2, setBackscroll2] = useState(0);
  const [backscrollstate3, setBackscroll3] = useState(0);
  const isTabletMode = useMediaQuery('(max-width: 650px)');
  const handleScroll = () => {
    setBackscroll(window.scrollY * -0.2);
    setBackscroll1(window.scrollY * -0.3);
    setBackscroll2(window.scrollY * -0.35);
    setBackscroll3(window.scrollY * -0.5);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {!isTabletMode ? (
        <>
          <Header />
          <BuildingDiv />
          <BackRainbow />
          <SideItemsOut>
            <SideItems>
              <BsTwitter className="contactIcon" />
              <FaDiscord className="contactIcon" />
              <BsMedium className="contactIcon" />
              <BsGithub className="contactIcon" />
              <SiGitbook className="contactIcon" />
              <FaInstagram className="contactIcon" />
            </SideItems>
          </SideItemsOut>
          <TempleSection>
            <Backmountain4 transform={backscrollstate} />
            <Backmountain3 transform={backscrollstate1} />
            <Backmountain2 transform={backscrollstate2} />
            <Backmountain1 transform={backscrollstate3} />
          </TempleSection>
        </>
      ) : (
        <>
          <Header />
          <InMobile>{/* <InMobileText>El DoradO</InMobileText> */}</InMobile>
        </>
      )}
    </>
  );
};

export default HeroContainer;
