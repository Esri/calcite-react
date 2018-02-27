import styled, { css } from 'styled-components';
import { figure } from '../../utils/elements';
import { h4 } from '../../utils/elements';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${props => props.theme.palette.white};
  box-shadow: 0 0 0 1px ${props => props.theme.palette.transparentOffWhite},
    ${props => props.theme.boxShadow};

  ${props =>
    props.wide &&
    css`
      flex-direction: row;
    `};

  ${props =>
    props.bar &&
    css`
      border-top: 3px solid
        ${props.theme.palette[props.bar] || props.theme.palette.blue};
    `};

  ${props =>
    props.shaped &&
    css`
      box-shadow: none;
      background: transparent;
    `};
`;

const StyledCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  word-wrap: break-word;

  ${props =>
    props.wide &&
    css`
      display: block;
      flex: 1 1 75%;
    `};

  ${props =>
    props.shaped &&
    css`
      border: 1px solid ${props => props.theme.palette.transparentOffWhite};
      box-shadow: ${props => props.theme.boxShadow};
      padding-top: 4rem;
    `};
`;

const StyledCardImageWrap = figure.extend`
  width: 100%;
  position: relative;
  margin-bottom: 0;
  flex: 0 0 auto;

  ${props =>
    props.shaped &&
    css`
      margin-bottom: -3rem;
      padding: 0 1.25rem;
      box-sizing: border-box;
    `};

  ${props =>
    props.wide &&
    css`
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      width: 25%;
      overflow: hidden;
      margin-bottom: 0;
    `};
`;

const StyledCardImage = styled.img`
  width: 100%;
  display: block;

  ${props =>
    props.wide &&
    css`
      width: auto;
      min-width: 100%;
      max-width: none;
      height: 100%;
      margin: 0;
      display: block;
      position: absolute;
    `};
`;

const StyledCardImageCaption = styled.figcaption`
  background: ${props => props.theme.palette.opaqueWhite};
  color: ${props => props.theme.palette.offBlack};
  font-style: normal;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  font-size: 0.875rem;
  line-height: 1.55rem;
  padding: 0.35rem 1.25rem 0.35rem 1.25rem;
`;

const StyledCardTitle = h4.extend`
  margin-bottom: 0.775rem;
`;

export {
  StyledCard,
  StyledCardContent,
  StyledCardImageWrap,
  StyledCardImage,
  StyledCardImageCaption,
  StyledCardTitle
};
