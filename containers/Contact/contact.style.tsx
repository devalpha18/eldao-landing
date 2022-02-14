import styled from 'styled-components';
import Image from 'next/image';

//---------------------------------contact-------------------------------------
export const ContactOut = styled.div`
    width:100%;
    background-color:#050a0e;
    padding-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 42px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledButton = styled.button`
  padding: 15px 50px;
  background-image: linear-gradient(45deg, #e1c548, #5083d4);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 31px;
  letter-spacing: -0.07em;
  min-width: 258px;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(45deg, #e1c548, #5083d4);
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 5vw;
    line-height: 3vw;
    padding: 15px 30px;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 66px;
  span {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    grid-gap: 10vw;
  }
`;

export const DescriptionContact = styled.span`
  font-family: Product Sans;
  font-size: 18px;
  line-height: 35px;
  margin:70px 0 30px 0;
  color: white;
  @media screen and (max-width: 600px) {
    font-size: 4vw;
    line-height: 7vw;
    width: 80%;
    text-align: center;
  }
`;
