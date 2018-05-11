import styled, { keyframes } from 'styled-components';
import { CalciteInput } from '../utils/commonElements';
import { transition } from '../utils/helpers';

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

const StyledCopyToClipboardInput = CalciteInput.extend`
  flex: 1 0 50px;
  width: auto;
  margin: 0;
  border-right: none;
`;

const ClipboardIconStyles = {
  marginLeft: 0
};

export {
  StyledCopyToClipboard,
  StyledCopyToClipboardInput,
  ClipboardIconStyles
};
