import React, { FC } from 'react';
import Image from 'next/image';
import {
    CityTitle,
    CityDevelopment,
    RoadmapSection,
    QSection,
    LeftSection,
    RightSection,
    SectionTitle,
    SectionContent,
    Title,
} from './MobileMode.style';
import Q1Img from '../../../assets/images/Q1.png';
import Q2Img from '../../../assets/images/Q2.png';
import Q3Img from '../../../assets/images/Q3.png';
import Q4Img from '../../../assets/images/Q4.png';
import ArrowDownImg from '../../../assets/images/arrow-down.png';

const CityMobile: FC = () => {
    return (
        <CityDevelopment>
            <CityTitle>
                <Title>City Developments</Title>
            </CityTitle>
            <RoadmapSection>
                <QSection>
                    <LeftSection>
                        <SectionTitle>Q1 2022</SectionTitle>
                        <SectionContent color="#AFFF6B" textDecorationLine="line-through">
                            <li>Eldao Launch</li>
                            <li>Staking and Bonding Live</li>
                            <li>App Live</li>
                            <li>Market Operation initiatives</li>
                        </SectionContent>
                    </LeftSection>
                    <Image src={Q1Img} alt="roadmap" />
                    <div></div>
                </QSection>
                <QSection>
                    <div></div>
                    <Image src={Q2Img} alt="roadmap" />
                    <RightSection>
                        <SectionTitle>Q2 2022</SectionTitle>
                        <SectionContent color="#FFFFFF" textDecorationLine="none">
                            <li>Grant Applications</li>
                            <li>Dashboard Updates</li>
                            <li>4,4 Bonds being deployed (hyperstaking)</li>
                            <li>KYC audits for further trust</li>
                            <li>Launch of DAO and Governance</li>
                        </SectionContent>
                    </RightSection>
                </QSection>
                <QSection>
                    <LeftSection>
                        <SectionTitle>Q3 2022</SectionTitle>
                        <SectionContent color="#FFFFFF" textDecorationLine="none">
                            <li>Listing on Centralised Exchanges</li>
                            <li>Launch of Teaser Game</li>
                            <li>Further partnerships</li>
                            <li>Quartlery Security Audit</li>
                            <li>Dual-incentivized liquidity pools</li>
                        </SectionContent>
                    </LeftSection>
                    <Image src={Q3Img} alt="roadmap" />
                    <div></div>
                </QSection>
                <QSection>
                    <div></div>
                    <Image src={Q4Img} alt="roadmap" />
                    <RightSection>
                        <SectionTitle>Q4 2022</SectionTitle>
                        <SectionContent color="#FFFFFF" textDecorationLine="none">
                            <li>Eldao Launch</li>
                            <li>Staking and Bonding Live</li>
                            <li>App Live</li>
                        </SectionContent>
                    </RightSection>
                </QSection>
                <Image src={ArrowDownImg} alt="arrowdown" width={58} />
            </RoadmapSection>
        </CityDevelopment>
    );
};

export default CityMobile;
