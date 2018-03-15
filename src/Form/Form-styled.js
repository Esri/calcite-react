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
  margin: 0 ${props => unitCalc(props.theme.baseline, 4, '/')}
    ${props => props.theme.baseline}
    ${props => unitCalc(props.theme.baseline, 4, '/')};
`;

const StyledFormControlLabel = styled.label``;

const StyledFormHelperText = styled.span`
  ${fontSize(-3)};
  color: ${props => props.theme.palette.transparentBlack};

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

const StyledFormLegend = styled.legend`
  position: relative;
  display: block;
  margin-bottom: 0.25rem;
`;

export {
  StyledForm,
  StyledFormControl,
  StyledFormControlLabel,
  StyledFormHelperText,
  StyledFormLegend
};
