import React, { FC } from 'react';
import Image from 'next/image';
import { GotoAppButton } from '../../components/button';
import {
  MapSection,
  StatsCard,
  CardHeader,
  TopSection,
  HorizontalBorder,
  Title1,
  VerticalBorder,
  Title2,
  DetailName,
  DetailAmount,
  Divider,
  MapTitle,
  GamingAppBtn,
  Gaming,
  Title,
  SubTitle,
  Description,
} from './gaming.style';
import AllMapImg from '../../assets/images/all-map.png';

const GamingContainer: FC = () => {
  return (
    <Gaming>
      <Title>Gaming Incubator & Arena</Title>
      <SubTitle>The Incubator cultivates the best GameFi projects which are then put to the test in the GameFi Arena.</SubTitle>
      <Description>
        El Dorado is home to a thriving gaming incubator which is funded by the treasury. Settlers use the cities voting mechanism to determine which
        projects can be put to the test into the GameFi Arena.
      </Description>
      <Description>
        Settlers who play incubator games will be rewarded with ELDA which can be spent within the game or at the NFT marketplace
      </Description>
      <GamingAppBtn>
        <GotoAppButton />
      </GamingAppBtn>
      {/* ---------------mapping----------------------------- */}
      <MapTitle>
        <Title>El Doradao City Map</Title>
      </MapTitle>
      <MapSection>
        <Image src={AllMapImg} alt="map" />
        <StatsCard>
          <CardHeader>
            <TopSection>
              <Title1>City Stats</Title1>
              <VerticalBorder />
              <Title2>Coin STATs</Title2>
            </TopSection>
            <HorizontalBorder />
          </CardHeader>
          <DetailName>Annual Percentage Yield</DetailName>
          <DetailAmount>30,876%</DetailAmount>
          <Divider />
          <DetailName>Treasury Balance</DetailName>
          <DetailAmount>$0 USD</DetailAmount>
          <Divider />
          <DetailName>Market Capitalization</DetailName>
          <DetailAmount>$ 12,963,289 USD</DetailAmount>
          <Divider />
          <DetailName>Total Value Locked</DetailName>
          <DetailAmount>$ 11,633,554 USD</DetailAmount>
        </StatsCard>
      </MapSection>
    </Gaming>
  );
};

export default GamingContainer;
