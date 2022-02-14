import styled from 'styled-components';

export const StyledGotoAppButton = styled.button`
  display: flex;
  grid-gap: 23px;
  align-items: center;
  padding: 15px 20px 15px 38px;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 2px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  @media screen and (max-width:1130px){
    display: none !important;
  }

  span {
    font-family: Product Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.02em;
    color: #e9e3f4;
  }
  svg {
    color: #db7e46;
    font-size: 13px;
    font-weight: bold;
    width: 13px;
    height: 15px;
  }
`;
