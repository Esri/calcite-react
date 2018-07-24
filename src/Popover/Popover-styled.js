import styled, { css } from 'styled-components';

const StyledTargetWrapper = styled.div`
  display: inline-block;
`;

const StyledPopover = styled.div`
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05);
  opacity: 0;
  transition: opacity ${props => props.transitionDuration}ms
    cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2000;

  &[data-x-out-of-boundaries] {
    display: none;
  }

  ${props =>
    props.transitionState === 'entering' &&
    css`
      opacity: 0;
    `};

  ${props =>
    props.transitionState === 'entered' &&
    css`
      opacity: 1;
      pointer-events: 'auto';
    `};
`;

export { StyledTargetWrapper, StyledPopover };
