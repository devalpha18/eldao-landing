import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

interface BackmountainProps {
  transform: number;
}
export const TempleSection = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-attachment: scroll;
`;
export const BackRainbow = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed;
  background-attachment: fixed;
  background: url(/assets/images/topback.png) no-repeat;
  background-size: 100% 100%;
`;
export const BuildingDiv = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background: url(/assets/images/building.png) no-repeat;
  background-position: center;
`;

export const Backmountain = styled.div<BackmountainProps>`
  position: fixed;
  bottom: 0;
  width: 100%;
  transform: ${(props: BackmountainProps) => `translate3d(0px, ${props.transform}px, 0px)`};
  height: 65vh;
  background-attachment: fixed;
  background: url(/assets/images/backmountain.png) no-repeat;
  background-position: top center;
  background-size: cover;
  z-index: 2;
`;
export const TopText = styled.div`
  font-family: Elianto !important;
  font-style: normal;
  font-weight: normal;
  font-size: 90px;
  text-align: center;
  margin-top: 200px;
  line-height: 126px;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(100deg, #763900, #fff3ea);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  @media screen and (max-width: 540px) {
    font-size: 60px !important;
  }
`;
