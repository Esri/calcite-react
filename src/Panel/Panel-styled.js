import styled, { css } from 'styled-components';
import { unitCalc, clearfix } from '../utils/helpers';
import { p } from '../utils/elements';
import { h4 } from '../utils/elements';

const StyledPanel = styled.div`
  ${clearfix()};
  background-color: ${props => props.theme.palette.offWhite};
  border: 1px solid ${props => props.theme.palette.lightestGray};
  padding: ${props => unitCalc(props.theme.baseline, 0.66, '*')};

  code {
    background-color: ${props => props.theme.palette.white};
  }

  ${props =>
    props.dark &&
    css`
      background-color: ${props => props.theme.palette.darkestGray};
      color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.offBlack};
    `};

  ${props =>
    props.black &&
    css`
      background-color: ${props => props.theme.palette.black};
      color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.offBlack};
    `};

  ${props =>
    props['dark-blue'] &&
    css`
      background-color: ${props => props.theme.palette.Brand_Blue_250};
      color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.darkerBlue};
    `};

  ${props =>
    props.blue &&
    css`
      background-color: ${props => props.theme.palette.blue};
      color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.darkBlue};
    `};

  ${props =>
    props['light-blue'] &&
    css`
      background-color: ${props => props.theme.palette.lightBlue};
      color: ${props => props.theme.palette.black};
      border: 1px solid ${props => props.theme.palette.blue};
    `};

  ${props =>
    props.white &&
    css`
      background-color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.lightestGray};

      code {
        background-color: ${props => props.theme.palette.offWhite};
      }
    `};

  ${props =>
    props['no-border'] &&
    css`
      border: none;
    `};

  ${props =>
    props['no-padding'] &&
    css`
      padding: 0;
    `};
`;

const StyledPanelText = p.extend`
  margin-bottom: 0rem;
`;

const StyledPanelTitle = h4.extend`
  margin-bottom: 0.775rem;
`;

export { StyledPanel, StyledPanelText, StyledPanelTitle };
