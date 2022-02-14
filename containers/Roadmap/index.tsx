import React, { FC } from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import Image from "next/image";
import {
    Roading,
    QuestSection,
    SubTitleYellow,
    DescriptionSection,
    DescriptionTitle,
    DescriptionStatement,
    TokenomicSection,
    TokenomicsImageOut,
    IntroTokenomicSection,
    Title,
} from './road.style';
import TokenomicsImg from '../../assets/images/tokenomics.png';
import TokenomicsTabletImg from '../../assets/images/tokenomics-tablet.png';

const RoadmapContainer: FC = () => {
    const isTabletMode = useMediaQuery('(max-width: 768px)');
    const isMobileMode = useMediaQuery('(max-width: 500px)');

    return (
        <Roading>
            {!isTabletMode && <Title>The road to eldoradao</Title>}
            <QuestSection>
                <SubTitleYellow>The Quest</SubTitleYellow>
                <DescriptionSection>
                    <DescriptionTitle>Next-Gen Digital Economy</DescriptionTitle>
                    <DescriptionStatement>
                        The original founders of El Doradao set on a journey to find the a digitial economy that had a sustained upward pressure in value. The
                        quest was on to find a city with a built in fabric of modern game theory mechanics to ensure a health financial ecosystem.
                    </DescriptionStatement>
                </DescriptionSection>
                <DescriptionSection>
                    <DescriptionTitle>Real Token Utility </DescriptionTitle>
                    <DescriptionStatement>
                        El Dorado&apos;s treasury is built upon an innovative dividend bootstraping mechanism that rewards both early investors and hodlers. On
                        top of this , El Doradao will provide real world utlity and sustained ELDAO token value via GameFi platforms, GameFi investments & its
                        thriving gaming community.
                    </DescriptionStatement>
                </DescriptionSection>
            </QuestSection>
            <TokenomicSection>
                <TokenomicsImageOut>
                    {isMobileMode ? (
                        <Image src={TokenomicsTabletImg} alt="tokenomics" layout="fill" />
                    ) : (
                        <Image src={TokenomicsImg} alt="tokenomics" layout="fill" />
                    )}
                </TokenomicsImageOut>
                <IntroTokenomicSection>
                    <SubTitleYellow>Tokenomics</SubTitleYellow>
                    <DescriptionSection>
                        <DescriptionTitle>Token Supply</DescriptionTitle>
                        <DescriptionStatement>At launch, ELDA had a Total Diluted Supply of 10,000,000 $ELDA.</DescriptionStatement>
                    </DescriptionSection>
                    <DescriptionSection>
                        <DescriptionTitle>Distribution</DescriptionTitle>
                        <DescriptionStatement>
                            Eldao sold 20% of the Initial Total Diluted Supply during our Community Offering. 40% was sold during our Fair Launch in order to
                            bootstrap our treasury. 20% of tokens are reserved for the team (locked and vested over one year), 10% for marketing & partnerships, and
                            10% were set aside for initial liquidity providing.
                        </DescriptionStatement>
                    </DescriptionSection>
                    <DescriptionStatement>Please refer to our Launch & Tokenomics Medium article for more details.</DescriptionStatement>
                </IntroTokenomicSection>
            </TokenomicSection>
        </Roading>
    );
};

export default RoadmapContainer;
