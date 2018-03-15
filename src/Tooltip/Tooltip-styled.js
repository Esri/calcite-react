import styled from 'styled-components';
import { unitCalc, fontSize } from '../utils/helpers';

const StyledTooltip = styled.div`
  padding: ${props => unitCalc(props.theme.baseline, 4, '/')}
    ${props => unitCalc(props.theme.baseline, 2, '/')};
  ${fontSize(-2)};
  color: ${props => props.theme.palette.white};
  text-align: center;
  word-wrap: break-word;
  white-space: pre;
  background: ${props => props.theme.palette.transparentBlack};
  border-radius: 3px;

  *[data-placement^='top'] & {
    margin-bottom: 8px;
  }
  *[data-placement^='bottom'] & {
    margin-top: 8px;
  }
  *[data-placement^='right'] & {
    margin-left: 8px;
  }
  *[data-placement^='left'] & {
    margin-right: 8px;
  }

  *[data-x-out-of-boundaries] {
    display: none;
  }
`;

const StyledTooltipArrow = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 0;

  *[data-placement^='top'] & {
    border-width: 5px 5px 0 5px;
    border-color: ${props => props.theme.palette.transparentBlack} transparent
      transparent transparent;
    transform: translateX(-50%);
    left: 50%;
    bottom: 3px;
  }
  *[data-placement^='bottom'] & {
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent
      ${props => props.theme.palette.transparentBlack} transparent;
    transform: translateX(-50%);
    left: 50%;
    top: 3px;
  }
  *[data-placement^='right'] & {
    border-width: 5px 5px 5px 0;
    border-color: transparent ${props => props.theme.palette.transparentBlack}
      transparent transparent;
    transform: translateY(-50%);
    top: 50%;
    left: 3px;
  }
  *[data-placement^='left'] & {
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent
      ${props => props.theme.palette.transparentBlack};
    transform: translateY(-50%);
    top: 50%;
    right: 3px;
  }
`;

export { StyledTooltip, StyledTooltipArrow };
