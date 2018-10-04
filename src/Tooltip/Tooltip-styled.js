import styled, { css } from 'styled-components';
import { unitCalc, fontSize } from '../utils/helpers';

const StyledTargetWrapper = styled.div`
  display: inline-block;
`;

const StyledTooltip = styled.div`
  padding: ${props => unitCalc(props.theme.baseline, 4, '/')}
    ${props => unitCalc(props.theme.baseline, 2, '/')};
  ${fontSize(-2)};
  color: ${props => props.theme.palette.white};
  text-align: center;
  background: ${props => props.theme.palette.transparentBlack};
  border-radius: ${props => props.theme.borderRadius || '3px'};
  max-width: 400px;
  opacity: 0;
  transition: opacity ${props => props.transitionDuration}ms
    cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 2000;

  &[data-placement^='top'] {
    margin-bottom: 8px;
  }
  &[data-placement^='bottom'] {
    margin-top: 8px;
  }
  &[data-placement^='right'] {
    margin-left: 8px;
  }
  &[data-placement^='left'] {
    margin-right: 8px;
  }

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
    `};
`;

const StyledTooltipArrow = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 0;

  &[data-placement^='top'] {
    border-width: 5px 5px 0 5px;
    border-color: ${props => props.theme.palette.transparentBlack} transparent
      transparent transparent;
    bottom: -5px;
  }
  &[data-placement^='bottom'] {
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent
      ${props => props.theme.palette.transparentBlack} transparent;
    top: -5px;
  }
  &[data-placement^='right'] {
    border-width: 5px 5px 5px 0;
    border-color: transparent ${props => props.theme.palette.transparentBlack}
      transparent transparent;
    left: -5px;
  }
  &[data-placement^='left'] {
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent
      ${props => props.theme.palette.transparentBlack};
    right: -5px;
  }
`;

export { StyledTargetWrapper, StyledTooltip, StyledTooltipArrow };
