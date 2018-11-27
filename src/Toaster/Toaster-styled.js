import styled from 'styled-components';

import Button from '../Button';

const StyledCloseButton = styled(Button)`
  color: currentColor;

  &:hover {
    color: currentColor;
    opacity: 0.7;
  }
`;

export { StyledCloseButton };
