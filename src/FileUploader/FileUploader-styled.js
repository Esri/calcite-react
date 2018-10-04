import styled from 'styled-components';
import { CalciteInput } from '../utils/commonElements';
import { unitCalc, fontSize } from '../utils/helpers';

const StyledFileUploader = styled(CalciteInput)`
  height: auto;

  &:active {
    border-color: ${props => props.theme.palette.blue};
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075),
      0 0 5px rgba(81, 167, 232, 0.5);
  }

  @supports (-moz-appearance: none) {
    padding: ${props => unitCalc(props.theme.baseline, 2, '/')}
      ${props => unitCalc(props.theme.baseline, 4, '/')};
  }

  &::-webkit-file-upload-button {
    position: relative;
    display: inline-block;
    padding: 0.2325rem 0.675rem;
    width: auto;
    color: ${props => props.theme.palette.blue};
    background: ${props => props.theme.palette.white};
    border: 1px solid ${props => props.theme.palette.blue};
    border-radius: ${props => props.theme.borderRadius};
    box-sizing: border-box;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
    white-space: nowrap;
    ${fontSize(-2)};
    letter-spacing: 0em;
    font-family: inherit;

    &:hover {
      text-decoration: none;
      color: ${props => props.theme.palette.white};
      background: ${props => props.theme.palette.darkBlue};
      border-color: ${props => props.theme.palette.darkBlue};
    }

    font-family: inherit;
    margin: 0.5em 0;
    -webkit-appearance: none;
  }

  ::-ms-value {
    border: none;
    background-color: transparent;
  }

  ::-ms-browse {
    position: relative;
    display: inline-block;
    padding: 0.2325rem 0.675rem;
    width: auto;
    color: ${props => props.theme.palette.blue};
    background: ${props => props.theme.palette.white};
    border: 1px solid ${props => props.theme.palette.blue};
    border-radius: ${props => props.theme.borderRadius};
    box-sizing: border-box;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
    white-space: nowrap;
    ${fontSize(-2)};
    letter-spacing: 0em;
    font-family: inherit;

    &:hover {
      text-decoration: none;
      color: ${props => props.theme.palette.white};
      background: ${props => props.theme.palette.darkBlue};
      border-color: ${props => props.theme.palette.darkBlue};
    }

    font-family: inherit;
    margin: 0.5em 0;
  }
`;

export { StyledFileUploader };
