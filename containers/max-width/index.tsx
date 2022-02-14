import styled from 'styled-components';

type Props = {
  maxWidth: number;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
};

const MaxWidthContainer = styled.div<Props>`
  width:100%;
  max-width: ${(props: Props) => `${props.maxWidth}px`};
  display: ${(props: Props) => (props.display ? props.display : 'block')};
  flex-direction: ${(props: Props) => (props.flexDirection ? props.flexDirection : 'row')};
  justify-content: ${(props: Props) => (props.justifyContent ? props.justifyContent : 'space-between')};
  align-items: ${(props: Props) => (props.alignItems ? props.alignItems : 'center')};
`;

export default MaxWidthContainer;
