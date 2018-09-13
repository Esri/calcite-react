import styled, { css } from 'styled-components';
import { CalciteInput, CalciteTextarea } from '../utils/commonElements';
import { unitCalc } from '../utils/helpers';

const StyledTextField = styled(CalciteInput)``;

const StyledTextArea = styled(CalciteTextarea)``;

const StyledTextFieldAdornmentWrapper = styled.div`
  display: flex;
`;

const StyledAdornmentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => unitCalc(props.theme.baseline, 6, '/')} 0 0 0;
  padding: 0 ${props => unitCalc(props.theme.baseline, 4, '/')};
  background: ${props => props.theme.palette.lightestGray};
  color: ${props => props.theme.palette.darkerGray};
  fill: currentColor;
  border: 1px solid ${props => props.theme.palette.lightGray};
  border-right: none;
  min-width: ${props => props.theme.baseline};

  input + & {
    border-left: none;
    border-right: 1px solid ${props => props.theme.palette.lightGray};
  }

  ${props =>
    props.minimal &&
    css`
      padding: 0 ${props => unitCalc(props.theme.baseline, 6, '/')};
      min-width: auto;
      background: transparent;
      border: none;
      border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
    `};
`;

export {
  StyledTextField,
  StyledTextArea,
  StyledTextFieldAdornmentWrapper,
  StyledAdornmentWrapper
};
