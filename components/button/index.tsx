import React, { FC } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';

import { StyledGotoAppButton } from './styled';

export const GotoAppButton: FC = () => {
  return (
    <StyledGotoAppButton>
      <span>GO TO APP</span>
      <AiOutlineDoubleRight />
    </StyledGotoAppButton>
  );
};
