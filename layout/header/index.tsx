import React, { FC, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'beautiful-react-hooks';

import { StyledContainer, LinkSection, MaxWidthContainer_Left } from './styled';
import MaxWidthContainer from '../../containers/max-width';
import { GotoAppButton } from '../../components/button';
import LogoIcon from '../../assets/icons/logo.png';
import LogoSmallIcon from '../../assets/icons/logo-small.png';
import featherMenuIcon from '../../assets/icons/feather_menu.png';

const Header: FC = () => {
  const iShownDropdown = useMediaQuery('(max-width: 1130px)');
  const isMobileM = useMediaQuery('(max-width: 375px)');

  return (
    <>
      <StyledContainer>
        <MaxWidthContainer maxWidth={1440} display="flex" alignItems="center" justifyContent="space-between">
          <MaxWidthContainer_Left>
            {isMobileM ? (
              <Image src={LogoSmallIcon} width={33} height={33} alt="logoicon" />
            ) : (
              <Image src={LogoIcon} width={183} height={33} alt="logoicon" />
            )}
            {iShownDropdown ? (
              <Image src={featherMenuIcon} width={38} height={38} alt="menuicon" />
            ) : (
              <>
                <LinkSection>
                  <Link href="#">El Doradao City Map</Link>
                  <Link href="#">Tokenomics</Link>
                  <Link href="#">City Developments</Link>
                  <Link href="#">FAQ</Link>
                  <Link href="#">Documentation</Link>
                </LinkSection>
              </>
            )}
          </MaxWidthContainer_Left>
          <GotoAppButton />
        </MaxWidthContainer>
      </StyledContainer>
    </>
  );
};

export default memo(Header);
