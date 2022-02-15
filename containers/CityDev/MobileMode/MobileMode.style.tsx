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

export const CityDevelopment = styled.div`
 background: url(/assets/images/birdback.png) no-repeat;
  background-size:100% 100%;
  width:100%;
  padding-top:250px;
  margin-top:-130px;
  background-attachment: scroll;
   background-size: cover;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RoadmapSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-gap: 15px;
    align-items: flex-start;
    width: 90% !important;
  }
  @media screen and (max-width: 500px) {
    grid-gap: 5px;
    padding-left: 20px !important;
  }
`;

export const QSection = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  text-align: right;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  text-align: left;
`;

export const SectionTitle = styled.div`
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0.02em;
  color: #e1c548;
  @media screen and (max-width: 500px) {
    font-size: 42px !important;
    line-height: 70px !important;
  }
`;

type SectionContentProps = {
  textDecorationLine: 'none' | 'line-through';
  color: string;
};

export const SectionContent = styled.ul<SectionContentProps>`
  margin-top: 30px;
  li {
    font-family: Product Sans;
    list-style: none;
    color: ${(props: SectionContentProps) => props.color};
    text-decoration-line: ${(props: SectionContentProps) => props.textDecorationLine};
    font-size: 20px;
    line-height: 48px;
    @media screen and (max-width: 900px) {
      font-size: 17px;
      line-height: 44px;
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 48px;
    }
    @media screen and (max-width: 500px) {
      font-size: 19px;
      line-height: 40px;
    }
    @media screen and (max-width: 400px) {
      font-size: 12px;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: 5px;
  }
`;

export const CityTitle = styled.div`
  margin-bottom:150px;
  @media screen and (max-width:480px){
    margin-bottom: 70px !important;
  }
`;