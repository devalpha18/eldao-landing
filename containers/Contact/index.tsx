import React, { FC } from 'react';
import { BsTwitter, BsGithub, BsMedium } from "react-icons/bs";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";
import {
    ContactOut, ButtonGroup, StyledButton, DescriptionContact, IconGroup
} from './contact.style';

const ContactContainer: FC = () => {
    return (
        <ContactOut>
            <ButtonGroup>
                <StyledButton>Join Discord</StyledButton>
                <StyledButton>Token Pre-Sale</StyledButton>
            </ButtonGroup>
            <DescriptionContact>Engage with the community, ask questions, participate in AMAs and more!</DescriptionContact>
            <IconGroup>
                <BsTwitter className='contactIcon' />
                <FaDiscord className='contactIcon' />
                <BsMedium className='contactIcon' />
                <BsGithub className='contactIcon' />
                <SiGitbook className='contactIcon' />
                <FaInstagram className='contactIcon' />
            </IconGroup>
        </ContactOut>
    );
};

export default ContactContainer;
