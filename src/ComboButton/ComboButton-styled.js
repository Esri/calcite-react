import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/Button-styled';
import { unitCalc } from '../utils/helpers';

const StyledComboButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const StyledComboButton = styled(StyledButton)`
  border-right-width: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const StyledComboButtonDropdown = styled(StyledButton)`
  height: 100%;
  fill: currentColor;
  padding-left: ${props => unitCalc(props.theme.baseline, 3, '/')};
  padding-right: ${props => unitCalc(props.theme.baseline, 3, '/')};
  display: flex;
  border-left: 1px solid ${props => props.theme.palette.darkBlue};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${props =>
    props.clear &&
    css`
      border-left-color: ${props => props.theme.palette.blue};
    `};

  ${props =>
    props.clearGray &&
    css`
      border-left-color: ${props => props.theme.palette.gray};
    `};

  ${props =>
    props.red &&
    css`
      border-left-color: ${props => props.theme.palette.red};
    `};

  ${props =>
    props.green &&
    css`
      border-left-color: ${props => props.theme.palette.darkGreen};
    `};
`;

export {
  StyledComboButtonContainer,
  StyledComboButton,
  StyledComboButtonDropdown
};
