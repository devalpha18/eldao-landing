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

// -----------------partner------------------------------
export const PartnerOut = styled.div`
  width:100%;
  background-color:#050a0e;
  padding-top:130px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
export const PartnersSection = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 70px;
  @media screen and (max-width: 1300px) {
    display: grid !important;
    grid-template-columns: 2fr 2fr 2fr!important;
    align-items: center !important;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr !important;
  }
`;
export const PartnerTitle = styled.div`
  margin-bottom:70px;
`;