import styled, { css } from 'styled-components';
import { fontSize, unitCalc } from '../utils/helpers';

const StyledForm = styled.form`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  ${props =>
    props.horizontal &&
    css`
      flex-direction: row;
    `};
`;

const StyledFormControl = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 ${props => unitCalc(props.theme.baseline, 4, '/')}
    ${props => unitCalc(props.theme.baseline, 1.25, '*')}
    ${props => unitCalc(props.theme.baseline, 4, '/')};

  ${props =>
    props.horizontal &&
    css`
      flex-direction: row;
      align-items: baseline;
      margin: 0 ${props => unitCalc(props.theme.baseline, 4, '/')}
        ${props => unitCalc(props.theme.baseline, 2, '/')}
        ${props => unitCalc(props.theme.baseline, 4, '/')};

      ${StyledFormHelperText} {
        margin-left: ${props => unitCalc(props.theme.baseline, 4, '/')};
      }
    `};

  ${props =>
    props.noValidation &&
    css`
      margin-bottom: ${props => unitCalc(props.theme.baseline, 4, '/')};
    `};

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

const StyledFormControlLabel = styled.label`
  display: flex;
  flex-direction: column;

  ${props =>
    props.horizontal &&
    css`
      flex-direction: row;
      align-items: center;
    `};
`;

const StyledFormControlLabelText = styled.span`
  ${props =>
    props.horizontal &&
    css`
      margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};
    `};
`;

const StyledFormHelperText = styled.span`
  ${fontSize(-3)};
  color: ${props => props.theme.palette.transparentBlack};
  height: 1.55rem;
  margin-bottom: -1.55rem;

  ${props =>
    props.error &&
    css`
      color: ${props => props.theme.palette.darkRed200};
    `};

  ${props =>
    props.success &&
    css`
      color: ${props => props.theme.palette.darkGreen200};
    `};
`;

const StyledLegend = styled.legend`
  position: relative;
  display: block;
  margin-bottom: 0.25rem;
  margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};

  ${props =>
    props.horizontal &&
    css`
      margin-bottom: 0;
    `};
`;

const StyledFieldset = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;

  ${props =>
    props.horizontal &&
    css`
      flex-direction: row;
    `};
`;

export {
  StyledForm,
  StyledFormControl,
  StyledFormControlLabel,
  StyledFormControlLabelText,
  StyledFormHelperText,
  StyledLegend,
  StyledFieldset
};
