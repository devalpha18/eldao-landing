import React, { FC } from 'react';
import Image from 'next/image';
import { StyledContainer, TopSection, Copyright } from './styled';
import LogoImg from '../../assets/icons/logo.png';

const FooterContainer: FC = () => {
  return (
    <StyledContainer>
      <TopSection>
        <Image src={LogoImg} alt="logo" />
        <hr />
      </TopSection>
      <Copyright>© Copyright Eldorado.game. All Rights Reserved</Copyright>
    </StyledContainer>
  );
};

export default FooterContainer;
