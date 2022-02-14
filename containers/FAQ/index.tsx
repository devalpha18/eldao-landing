import React, { FC, useState } from 'react';
import Image from 'next/image';
import {
    Tabs,
    TabTitle,
    Collapsible,
    CollapsibleTitle,
    DividerFaq,
    CollapsibleDescription,
    FaqOut,
} from './faq.style';
import PlusImg from '../../assets/icons/plus.png';
import MinusImg from '../../assets/icons/minus.png';

const FAQContainer: FC = () => {
    const [isActiveFirstTab, setIsActiveFirstTab] = useState<boolean>(true);
    const [collapsibleState, setCollapsibleState] = useState<string>('third');

    const handleCollapsible = (value: string) => {
        if (value === collapsibleState) setCollapsibleState('none');
        else setCollapsibleState(value);
    };
    return (
        <FaqOut>
            <Tabs>
                <TabTitle onClick={() => setIsActiveFirstTab(true)} active={isActiveFirstTab}>
                    ELDORADO FAQ
                </TabTitle>
                <TabTitle onClick={() => setIsActiveFirstTab(false)} active={!isActiveFirstTab}>
                    OLYMPUS DAO FAQ
                </TabTitle>
            </Tabs>
            <Collapsible>
                <CollapsibleTitle onClick={() => handleCollapsible('first')}>
                    <span>Are you forking OHM?</span>
                    {collapsibleState == 'first' ? <Image src={MinusImg} alt="minus" /> : <Image src={PlusImg} alt="plus" />}
                </CollapsibleTitle>
                {collapsibleState == 'first' && (
                    <CollapsibleDescription>
                        The projects we invest in will likely be later stage, closer to their launch, so those inherently are less risky and we will be able to
                        see community, traction, and product.
                        <br />
                        <br />
                        For earlier projects that are less proven, we plan on having a very active relationship with those teams, helping them incubate and grow.
                        We even envision ourselves having developers reach out to us telling us that they want to build something, and us providing them with an
                        idea and infrastructure to start. Our team comes from a variety of backgrounds, including crypto venture capital investing, blockchain
                        development, product management, and marketing. Additionally, the DAO will vote and ultimately be the arbiter of any decision made by the
                        Innovation Fund.
                    </CollapsibleDescription>
                )}
                <DividerFaq />
                <CollapsibleTitle onClick={() => handleCollapsible('second')}>
                    <span>What is the Innovation Fund and how will it work?</span>
                    {collapsibleState == 'second' ? <Image src={MinusImg} alt="minus" /> : <Image src={PlusImg} alt="plus" />}
                </CollapsibleTitle>
                {collapsibleState == 'second' && (
                    <CollapsibleDescription>
                        The projects we invest in will likely be later stage, closer to their launch, so those inherently are less risky and we will be able to
                        see community, traction, and product.
                        <br />
                        <br />
                        For earlier projects that are less proven, we plan on having a very active relationship with those teams, helping them incubate and grow.
                        We even envision ourselves having developers reach out to us telling us that they want to build something, and us providing them with an
                        idea and infrastructure to start. Our team comes from a variety of backgrounds, including crypto venture capital investing, blockchain
                        development, product management, and marketing. Additionally, the DAO will vote and ultimately be the arbiter of any decision made by the
                        Innovation Fund.
                    </CollapsibleDescription>
                )}
                <DividerFaq />
                <CollapsibleTitle onClick={() => handleCollapsible('third')}>
                    <span>What do you think the vetting process of these start up projects will look like?</span>
                    {collapsibleState == 'third' ? <Image src={MinusImg} alt="minus" /> : <Image src={PlusImg} alt="plus" />}
                </CollapsibleTitle>
                {collapsibleState == 'third' && (
                    <CollapsibleDescription>
                        The projects we invest in will likely be later stage, closer to their launch, so those inherently are less risky and we will be able to
                        see community, traction, and product.
                        <br />
                        <br />
                        For earlier projects that are less proven, we plan on having a very active relationship with those teams, helping them incubate and grow.
                        We even envision ourselves having developers reach out to us telling us that they want to build something, and us providing them with an
                        idea and infrastructure to start. Our team comes from a variety of backgrounds, including crypto venture capital investing, blockchain
                        development, product management, and marketing. Additionally, the DAO will vote and ultimately be the arbiter of any decision made by the
                        Innovation Fund.
                    </CollapsibleDescription>
                )}
                <DividerFaq />
                <CollapsibleTitle onClick={() => handleCollapsible('fourth')}>
                    <span>What measures are you considering to use for mitigating risk when choosing projects to use the Innovation Fund?</span>
                    {collapsibleState == 'fourth' ? <Image src={MinusImg} alt="minus" /> : <Image src={PlusImg} alt="plus" />}
                </CollapsibleTitle>
                {collapsibleState == 'fourth' && (
                    <CollapsibleDescription>
                        The projects we invest in will likely be later stage, closer to their launch, so those inherently are less risky and we will be able to
                        see community, traction, and product.
                        <br />
                        <br />
                        For earlier projects that are less proven, we plan on having a very active relationship with those teams, helping them incubate and grow.
                        We even envision ourselves having developers reach out to us telling us that they want to build something, and us providing them with an
                        idea and infrastructure to start. Our team comes from a variety of backgrounds, including crypto venture capital investing, blockchain
                        development, product management, and marketing. Additionally, the DAO will vote and ultimately be the arbiter of any decision made by the
                        Innovation Fund.
                    </CollapsibleDescription>
                )}
                <DividerFaq />
            </Collapsible>
        </FaqOut>
    );
};

export default FAQContainer;
