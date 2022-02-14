import React, { FC } from 'react';
import Image from 'next/image';
import {
    PartnerTitle,
    PartnersSection,
    PartnerOut,
    Title,
} from './partner.style';
import AvalancheIcon from '../../assets/icons/avalanche.png';
import CardanoIcon from '../../assets/icons/cardano.png';
import SolanaIcon from '../../assets/icons/solana.png';
import LusoIcon from '../../assets/icons/luso.png';
import PolkadotIcon from '../../assets/icons/polkadot.png';
const PartnerContainer: FC = () => {
    return (
        <PartnerOut>
            <PartnerTitle>
                <Title>Partners</Title>
            </PartnerTitle>
            <PartnersSection>
                <Image src={AvalancheIcon} alt="avalanche" width={200} height={45} />
                <Image src={SolanaIcon} alt="solana" width={200} height={45} />
                <Image src={LusoIcon} alt="luso" width={200} height={25} />
                <Image src={PolkadotIcon} alt="polkadot" width={200} height={45} />
                <Image src={CardanoIcon} alt="cardano" width={200} height={45} />
            </PartnersSection>
        </PartnerOut>
    );
};

export default PartnerContainer;
