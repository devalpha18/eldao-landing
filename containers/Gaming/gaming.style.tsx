import styled from 'styled-components';
import Image from 'next/image';

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
  margin-bottom: 30px;
`;

export const SubTitle = styled.span`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 60px;
  margin-bottom: 20px;
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
  @media screen and (max-width: 600px) {
    font-size: 30px !important;
    line-height: 50px !important;
    margin: 30px 0 !important;
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

export const Gaming = styled.div`
  text-align: center;
  display: flex;
  padding: 300px 0 50px 0;
  margin-top: -120px;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  background: url(/assets/images/gaming.png) no-repeat;
  background-size: 100% 100%;
  background-attachment: scroll;
  background-size: cover;
  background-position: top center;
  @media screen and (max-width: 1300px) {
    margin-top: -150px !important;
  }
`;
export const GamingAppBtn = styled.div`
  margin: 50px 0 150px 0;
`;
export const MapTitle = styled.div`
  margin-bottom: 30px;
`;

export const MapSection = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 50px;
  max-width: 1440px;
  padding: 0px 160px;
  img {
    width: 100% !important;
    height: auto !important;
  }
  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    img {
      width: 715px !important;
      height: auto !important;
    }
  }
`;

export const StatsCard = styled.div`
  background: linear-gradient(180deg, #14192b 0%, rgba(20, 25, 43, 0) 100%);
  border-radius: 25px;
  width: 100%;
  height: auto;
  padding: 12px 17px 25px 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  @media screen and (max-width: 768px) {
    width: 80vw;
    grid-gap: 6vw;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  grid-gap: 15px;
  @media screen and (max-width: 1300px) {
    grid-gap: 40px;
  }
  @media screen and (max-width: 768px) {
    grid-gap: 6vw;
  }
`;

export const Title1 = styled.span`
  font-family: Elianto;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #e1c548;
  @media screen and (max-width: 1300px) {
    font-size: 30px;
    line-height: 25px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 3vw;
    line-height: 2.5vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    line-height: 3vw;
  }
`;

export const VerticalBorder = styled.div`
  width: 1px;
  background: #fff000;
  height: 100px;
  @media screen and (max-width: 1300px) {
    height: 7vw;
  }
  @media screen and (max-width: 768px) {
    height: 10vw;
  }
`;

export const Title2 = styled.span`
  font-family: Elianto;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
  @media screen and (max-width: 1300px) {
    font-size: 30px;
    line-height: 25px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 3vw;
    line-height: 2.5vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    line-height: 3vw;
  }
`;

export const HorizontalBorder = styled.div`
  width: 100%;
  background: #fff000;
  height: 1px;
`;

export const DetailName = styled.span`
  font-family: Product Sans;
  font-size: 21px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  @media screen and (max-width: 1300px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 600px) {
    line-height: 1vw;
  }
`;

export const DetailAmount = styled.span`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #e1c548;
  @media screen and (max-width: 1300px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 600px) {
    line-height: 1vw;
  }
`;

export const Divider = styled.div`
  width: 50%;
  background: #fff000;
  height: 1px;
`;
