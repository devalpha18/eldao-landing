import React, { FC, useEffect, useState } from 'react';
import { BsTwitter, BsGithub, BsMedium } from "react-icons/bs";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { useMediaQuery } from 'beautiful-react-hooks';
import { SiGitbook } from "react-icons/si";
import { Backmountain, SideItems, InMobileText, InMobile, SideItemsOut, BackRainbow, TopText, TempleSection, BuildingDiv } from './styled';

const HeroContainer: FC = () => {
  const [backscrollstate, setBackscroll] = useState(0);
  const isTabletMode = useMediaQuery('(max-width: 600px)');
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
      {!isTabletMode ? <>
        <BuildingDiv>
          <TopText>El DoradO</TopText>
        </BuildingDiv>
        <BackRainbow />
        <SideItemsOut>
          <SideItems>
            <BsTwitter className='contactIcon' />
            <FaDiscord className='contactIcon' />
            <BsMedium className='contactIcon' />
            <BsGithub className='contactIcon' />
            <SiGitbook className='contactIcon' />
            <FaInstagram className='contactIcon' />
          </SideItems>
        </SideItemsOut>
        <TempleSection>
          <Backmountain transform={backscrollstate} />
        </TempleSection>
      </> : <InMobile>
        <InMobileText>El DoradO</InMobileText>
      </InMobile>}


    </>
  );
};

export default HeroContainer;
