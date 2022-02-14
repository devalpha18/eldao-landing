import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  width:100%;
  align-items: flex-start;
  background-color:#050a0e;;
  align-self: center;
  grid-gap: 25px;
  padding-left: 28px;
  min-height: 50vh;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 10px;
  width: 100vw;
  hr {
    width: 100%;
    height: 1px;
  }
`;

export const Copyright = styled.span`
  font-family: Product Sans;
  font-size: 10px;
  line-height: 30px;
  text-align: left;
  letter-spacing: -0.01em;
  color: #c4c4c4;
`;
