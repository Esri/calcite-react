import styled, { css } from 'styled-components';
import { unitCalc } from '../../utils/helpers';
import { linkColor } from '../../utils/color';
import { a } from '../../utils/elements';

const StyledAlert = styled.div`
  padding: ${props => unitCalc(props.theme.baseline, 2, '/')};
  color: ${props => props.theme.palette.transparentBlack};
  background-color: ${props => props.theme.palette.lightestBlue};
  position: relative;
  z-index: 100;
  max-width: 40em;
  border: 1px solid ${props => props.theme.palette.blue};
  box-shadow: ${props => props.theme.boxShadow};

  ${props =>
    linkColor(props.theme.palette.offBlack, props.theme.palette.black)};

  ${props =>
    props.red &&
    css`
      background-color: ${props => props.theme.palette.lightestRed};
      border-color: ${props => props.theme.palette.red};
    `};

  ${props =>
    props.yellow &&
    css`
      background-color: ${props => props.theme.palette.lightestYellow};
      border-color: ${props => props.theme.palette.yellow};
    `};

  ${props =>
    props.green &&
    css`
      background-color: ${props => props.theme.palette.lightestGreen};
      border-color: ${props => props.theme.palette.green};
    `};

  ${props =>
    props.full &&
    css`
      max-width: none;
    `};
`;

const StyledAlertClose = a.extend`
    position: absolute;
    right: ${props => unitCalc(props.theme.baseline, 2, '/')};
  `;

export { StyledAlert, StyledAlertClose };
