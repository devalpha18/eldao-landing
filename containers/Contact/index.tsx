import React, { FC } from 'react';
import Image from 'next/image';
import {
    ContactOut, ButtonGroup, StyledButton, DescriptionContact, IconGroup
} from './contact.style';
import TwitterImg from '../../assets/icons/twitter.png';
import DiscordImg from '../../assets/icons/discord.png';
import MediumImg from '../../assets/icons/medium.png';
import GithubImg from '../../assets/icons/github.png';
import GitbookImg from '../../assets/icons/gitbook.png';
import InstagramImg from '../../assets/icons/instagram.png';

const ContactContainer: FC = () => {
    return (
        <ContactOut>
            <ButtonGroup>
                <StyledButton>Join Discord</StyledButton>
                <StyledButton>Token Pre-Sale</StyledButton>
            </ButtonGroup>
            <DescriptionContact>Engage with the community, ask questions, participate in AMAs and more!</DescriptionContact>
            <IconGroup>
                <Image src={TwitterImg} alt="twitter" />
                <Image src={DiscordImg} alt="discord" />
                <Image src={MediumImg} alt="medium" />
                <Image src={GithubImg} alt="github" />
                <Image src={GitbookImg} alt="gitbook" />
                <Image src={InstagramImg} alt="instagram" />
            </IconGroup>
        </ContactOut>
    );
};

export default ContactContainer;
