import styled from 'styled-components';
import Image from 'next/image';

interface BackmountainProps {
  transform: string;
}

export const ForestContainer = styled.div`
  width: 100vw;
  position: relative;
  background-attachment: scroll;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;
export const ForestDiv = styled.div`
  width: 100%;
  height: 1100px;
  text-align: center;
  display: flex;
  padding-top: 170px;
  flex-direction: column;
  align-items: center;
  background: url(/assets/images/forest.png) no-repeat;
  background-size: 100% 100%;
  background-attachment: scroll;
  background-size: cover;
  background-position: top center;
  @media screen and (max-width: 500px) {
    height: 1200px !important;
  }
`;
export const Upmountain = styled.div`
  width: 100vw;
  height: 370px;
  position: absolute;
  background-attachment: scroll;
  top: -350px;
  background: url(/assets/images/upforest.png) no-repeat;
  background-size: cover;
  background-position: bottom center;
`;
export const DecentText = styled.div`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  position: absolute;
  top: -140px;
  z-index: 5;
  width: 920px;
  font-size: 40px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 940px) {
    font-size: 30px !important;
    width: 90% !important;
    top: -80px !important;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 30px;
  margin-top: 170px;
`;

export const Title = styled.span`
  font-family: Elianto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #e1c548;
`;

export const SubTitle = styled.span`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 69px;
  text-align: center;
  letter-spacing: -0.02em;
  color: white;
  span {
    color: #e1c548;
  }
  width: 750px;
  @media screen and (max-width: 760px) {
    width: 90% !important;
    font-size: 35px !important;
  }
`;

export const Description = styled.span`
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  width: 770px;
  @media screen and (max-width: 770px) {
    width: 90% !important;
  }
`;
