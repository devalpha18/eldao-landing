import styled from 'styled-components';

export const StyledContainer = styled.header`
  padding: 30px 0;
  width: 100vw;
  display: flex;
  justify-content:center;
  z-index: 100;
  background: linear-gradient(180.03deg,rgba(38,17,55,90.81) -18.22%,rgba(38,17,55,0.31) 39.51%,rgba(209,110,17,0) 88.22%,rgba(180,121,41,0) 104.19%);
  position: fixed;
  @media screen and (max-width: 1450px) {
    padding: 30px !important;
  }
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 35px;
  margin-left:60px;
  a {
    font-family: Product Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 35px;
    letter-spacing: 0.03em;
    color: #ffffff;
  }
`;
export const MaxWidthContainer_Left = styled.div`
  display: flex;
  align-items:center;
  @media screen and (max-width:1130px){
    width:100% !important;
    justify-content:space-between !important;
  }
`;