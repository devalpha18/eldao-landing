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
`;

export const Roading = styled.div`
  width:100%;
  margin-top:-10px;
  background: url(/assets/images/Sunback.png) no-repeat;
  background-size:100% 100%;
  background-attachment: scroll;
  background-size: cover;
  padding-top:80px;
  background-position: top center;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media screen and (max-width:1300px){
    height: 2200px;
  }
`;

export const QuestSection = styled.div`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-gap: 40px;
  width: 1250px;
  @media screen and (min-width: 1450px) {
    margin-top: 12vw;
    grid-gap: 2vw;
  }
  @media screen and (min-width: 1540px) {
    margin-top: 15vw;
    grid-gap: 5vw;
  }
  @media screen and (min-width: 1600px) {
    margin-top: 13vw;
  }
  @media screen and (min-width: 1650px) {
    margin-top: 15vw;
  }
  @media screen and (min-width: 1700px) {
    margin-top: 14vw;
  }
  @media screen and (min-width: 1800px) {
    margin-top: 10vw;
  }
  @media screen and (min-width: 1870px) {
    margin-top: 12vw;
  }
  @media screen and (max-width: 1300px) {
    margin-top: 2vw;
    width: auto;
    grid-gap: 0vw;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10vw;
    grid-gap: 10vw;
    margin-left: 0px;
  }
  @media screen and (max-width:600px){
    padding: 0 20px !important;
  }
  @media screen and (max-width: 450px) {
    margin-top: 5vw;
    grid-gap: 7vw;
  }
  @media screen and (max-width: 420px) {
    margin-top: 2vw;
    grid-gap: 4vw;
  }
  @media screen and (max-width: 400px) {
    margin-top: 0vw;
    grid-gap: 0vw;
  }

`;

export const SubTitleYellow = styled.span`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 69px;
  letter-spacing: -0.02em;
  color: #e1c548;
`;

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DescriptionTitle = styled.span`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  letter-spacing: -0.03em;
  color: #ffffff;
  @media screen and (max-width:410px){
    margin-top: 20px !important;
  }
`;

export const DescriptionStatement = styled.span`
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  text-align:left;
  letter-spacing: -0.03em;
  color: #d3d3d3;
  width: 560px;
  @media screen and (max-width:600px){
    width: 100% !important;
    padding: 0 20px !important;
  }
`;

export const TokenomicSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  padding: 87px 0 130px 0;
  width: 100vw;
  max-width: 1250px;
  @media screen and (max-width: 1300px) {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    padding: 17px 20px 0px 10px;
  }
  @media screen and (max-width: 768px) {
    grid-gap: 10vw;
    padding: 13vw 0 10vw 0;
  }
  @media screen and (max-width: 680px) {
    grid-gap: 8vw;
    padding: 10vw 0 8vw 0;
  }
  @media screen and (max-width:600px){
    width: 100% !important;
    padding: 0 20px !important;
  }
  @media screen and (max-width: 450px) {
    margin-top: 0;
    padding: 10vw 0 8vw 0;
  }
  @media screen and (max-width: 400px) {
    margin-top: 0;
    padding: 5vw 0 4vw 0;
  }
`;

export const TokenomicsImageOut = styled.div`
  width: 590px;
  height: 590px;
  position: relative;
  @media screen and (max-width: 670px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 530px) {
    width: 400px !important;
    height: 400px !important;
  }
  @media screen and (max-width: 400px) {
    width: 300px !important;
    height: 300px !important;
  }
`;

export const IntroTokenomicSection = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;