import styled from 'styled-components';

// ------------------------------FAQ------------------------------------
export const FaqOut = styled.div`
  width:100%;
  background-color:#050a0e;
  padding-top:130px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Tabs = styled.div`
  display: flex;
  grid-gap: 85px;
  @media screen and (max-width: 600px) {
    grid-gap: 10vw;
  }
  @media screen and (max-width: 425px) {
    grid-gap: 10vw;
  }
`;

interface TabTitleProps {
  active: boolean;
}

export const TabTitle = styled.span<TabTitleProps>`
  font-family: Elianto;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ active }) => (active ? '#e1c548' : 'white')};
  position: relative;
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: ${({ active }) => (active ? '5px' : 0)};
    background-color: #e1c548;
    bottom: -12px;
    left: 0;
  }
  @media screen and (max-width: 1100px) {
    font-size: 30px;
    line-height: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 25px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const Collapsible = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1074px;
  max-width: 1074px;
  @media screen and (max-width: 1100px) {
    width: 90vw;
  }
`;

export const CollapsibleTitle = styled.div`
  width: 100%;
  padding: 37px 40px;
  display: flex;
  text-align:left;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: Product Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    width: 853px;
    @media screen and (max-width: 1100px) {
      font-size: 18px;
      line-height: 20px;
    }
    @media screen and (max-width: 1050px) {
      width: 70vw;
    }
  }
`;

export const CollapsibleDescription = styled.span`
  width: 100%;
  padding: 0px 150px 0 40px;
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align:left;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    padding: 0px 100px 0 40px;
  }
  @media screen and (max-width: 550px) {
    padding: 0px 70px 0 40px;
  }
`;

export const DividerFaq = styled.div`
  width: 100%;
  background: rgba(111, 111, 111, 0.13);
  box-sizing: border-box !important;
  backdrop-filter: blur(50px);
  border-radius: 15px;
  height: 6px;
`;