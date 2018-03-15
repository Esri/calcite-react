import styled from 'styled-components';

const StyledPopover = styled.div`
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05);

  &[data-placement^='top'] {
    margin-bottom: 5px;
  }
  &[data-placement^='bottom'] {
    margin-top: 5px;
  }
  &[data-placement^='right'] {
    margin-left: 5px;
  }
  &[data-placement^='left'] {
    margin-right: 5px;
  }

  &[data-x-out-of-boundaries] {
    display: none;
  }
`;

const StyledPopperTransition = {
  entering: { opacity: 0 },
  entered: {
    opacity: 1,
    pointerEvents: 'auto'
  }
};

export { StyledPopover, StyledPopperTransition };
