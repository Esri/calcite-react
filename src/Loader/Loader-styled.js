import styled, { keyframes } from 'styled-components';
import { unitCalc } from '../utils/helpers';

const loaderVariables = {
  loaderWidth: '0.85rem',
  loaderHeight: '2rem',
  loaderZoom: '0.5rem',
  loaderSpacing: '1.25rem',
  loaderSpeed: '0.8s',
  loaderDelay: '0.16s'
};

const loadAnimation = props => {
  return keyframes`
  0%,
  80%,
  100% {
    opacity: 1;
    box-shadow: 0 0 ${props.theme.palette.blue};
    height: ${loaderVariables.loaderHeight};
  }
  40% {
    opacity: 1;
    box-shadow: 0 ${unitCalc(loaderVariables.loaderZoom, -1, '*')} ${
    props.theme.palette.blue
  };
    height: ${unitCalc(
      loaderVariables.loaderHeight,
      loaderVariables.loaderZoom,
      '+'
    )};
  }
  `;
};

const loaderStyles = props => {
  return `
    background: ${props.theme.palette.blue};
    animation: ${loadAnimation(props)} ${
    loaderVariables.loaderSpeed
  } infinite ease-in-out;
    width: ${loaderVariables.loaderWidth};
    height: ${loaderVariables.loaderHeight};
  `;
};

const loaderPseudoElements = props => {
  return `
    ${loaderStyles(props)};
    position: absolute;
    top: 0;
    content: '';
  `;
};

const StyledLoader = styled.div`
  position: relative;
  min-height: 3rem;
`;

const StyledLoaderBars = styled.div`
  ${props => loaderStyles(props)};

  text-indent: -9999em;
  margin: auto;
  position: absolute;
  right: ${props =>
    `calc(50% - ${parseFloat(loaderVariables.loaderWidth) / 2}rem)`};
  font-size: 11px;
  animation-delay: ${loaderVariables.loaderDelay};
  margin: ${props => unitCalc(loaderVariables.loaderHeight, 0.25, '*')} 0 0;

  &:before {
    ${props => loaderPseudoElements(props)};
    left: -${loaderVariables.loaderSpacing};
  }

  &:after {
    ${props => loaderPseudoElements(props)};
    left: ${loaderVariables.loaderSpacing};
    animation-delay: ${unitCalc(loaderVariables.loaderDelay, 2, '*')};
  }
`;

const StyledLoaderText = styled.div`
  text-align: center;
  padding-top: 3.5rem;
`;

export { StyledLoader, StyledLoaderBars, StyledLoaderText };
