import styled, { css, keyframes } from 'styled-components';
import { unitCalc } from '../utils/helpers';
import { CalciteTheme } from '../CalciteThemeProvider';

const loaderVariables = {
  loaderWidth: '0.85em',
  loaderHeight: '2em',
  loaderZoom: '0.5em',
  loaderSpacing: '1.25em',
  loaderSpeed: '0.8s',
  loaderDelay: '0.16s',
  loaderBlue: CalciteTheme.palette.blue
};

const loadKeyframes = keyframes`
  0%,
  80%,
  100% {
   opacity: .75;
   box-shadow: 0 0 ${loaderVariables.loaderBlue};
   height: ${loaderVariables.loaderHeight};
  }
  40% {
   opacity: 1;
   box-shadow: 0 -0.5em ${loaderVariables.loaderBlue};
   height: ${unitCalc(
     loaderVariables.loaderHeight,
     loaderVariables.loaderZoom,
     '+'
   )};
  }
`;

const loadAnimation = css`
  ${loadKeyframes} ${loaderVariables.loaderSpeed} infinite ease-in-out;
`;

const loaderStyles = css`
  background: ${loaderVariables.loaderBlue};
  animation: ${loadAnimation};
  width: ${loaderVariables.loaderWidth};
  height: ${loaderVariables.loaderHeight};
`;

const loaderPseudoElements = css`
  ${loaderStyles};
  position: absolute;
  top: 0;
  content: '';
`;

const StyledLoader = styled.div`
  position: relative;
  min-height: 3rem;
`;

const StyledLoaderBars = styled.div`
  ${loaderStyles};

  text-indent: -9999em;
  margin: auto;
  position: absolute;
  right: ${props =>
    `calc(50% - ${parseFloat(loaderVariables.loaderWidth) / 2}em)`};
  font-size: ${props => props.sizeRatio}px;
  animation-delay: ${loaderVariables.loaderDelay};
  margin: ${props => unitCalc(loaderVariables.loaderHeight, 0.25, '*')} 0 0;

  &:before {
    ${loaderPseudoElements};
    left: -${loaderVariables.loaderSpacing};
  }

  &:after {
    ${loaderPseudoElements};
    left: ${loaderVariables.loaderSpacing};
    animation-delay: ${unitCalc(loaderVariables.loaderDelay, 2, '*')};
  }
`;

const StyledLoaderText = styled.div`
  text-align: center;
  padding-top: 3.5rem;
`;

export { StyledLoader, StyledLoaderBars, StyledLoaderText };
