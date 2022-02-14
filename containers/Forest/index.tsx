import React, { FC } from 'react';
import { GotoAppButton } from '../../components/button';
import {
    ForestDiv,
    Upmountain,
    TextSection,
    Title,
    SubTitle,
    Description,
    DecentText
} from './forest.style';

const Forest: FC = () => {

    return (
        <>
            <DecentText>
                Decentralised community fund and GameFi platform incubator backed by a digital economy.
            </DecentText>
            <Upmountain />
            {/* -------------------Forest------------------------ */}
            <ForestDiv>
                <GotoAppButton />
                <TextSection>
                    <Title>The treasury</Title>
                    <SubTitle>
                        <span>El Dorado</span> provides early settlers with a high yield of <span>ELDA</span>, the city’s reserve currency.
                    </SubTitle>
                    <Description>El Dorado’s treasury is the heart and soul of the community fund, which is backed by a breadth of digital assets.</Description>
                    <Description>Settlers can stake the city’s reserve currency, ELDA, for yield benefits and governance rights.</Description>
                </TextSection>
            </ForestDiv>
        </>
    );
};

export default Forest;
