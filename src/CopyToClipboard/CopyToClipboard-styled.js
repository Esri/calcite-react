import styled, { keyframes } from 'styled-components';
import { CalciteInput } from '../utils/commonElements';
import { transition } from '../utils/helpers';
import Button from '../Button';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledCopyToClipboard = styled.div`
  display: flex;

  svg {
    animation: ${FadeIn} ${transition()};
  }
`;

const StyledCopyToClipboardInput = styled(CalciteInput)`
  flex: 1 0 50px;
  width: auto;
  margin: 0;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const StyledCopyButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const ClipboardIconStyles = {
  marginLeft: 0
};

export {
  StyledCopyToClipboard,
  StyledCopyToClipboardInput,
  ClipboardIconStyles,
  StyledCopyButton
};
