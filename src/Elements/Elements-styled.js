import styled, { css } from 'styled-components';
import { fontSize, unitCalc } from '../utils/helpers';

const html = styled.html`
  height: 100%;
  font-size: 100%;
  font-family: 'Avenir Next W01', 'Avenir Next W00', 'Avenir Next', 'Avenir',
    'Helvetica Neue', sans-serif;
`;

const body = styled.body`
  min-height: 100%;
  margin: 0;

  tracking: 0;
  font-family: 'Avenir Next W01', 'Avenir Next W00', 'Avenir Next', 'Avenir',
    'Helvetica Neue', sans-serif;
  line-height: 1.55rem;
  color: #4c4c4c;
  background-color: #ffffff;

  -webkit-font-smoothing: subpixel-antialiased;

  font-feature-settings: 'kern';

  font-kerning: normal;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'liga' 1, 'calt' 0;
`;

const p = styled.p`
  margin-top: 0;
  margin-bottom: 1.55rem;
`;

const a = styled.a`
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.linkHover};
    text-decoration: underline;
  }
`;

const baseH = styled.h1`
  font-weight: 300;
  font-style: normal;
  margin: 0 0 ${props => props.theme.baseline} 0;
`;

const h1 = styled(baseH)`
  ${fontSize(5)};
`;

let h2 = styled(baseH.withComponent('h2'))`
  ${fontSize(4)};
`;

let h3 = styled(baseH.withComponent('h3'))`
  ${fontSize(3)};
`;

let h4 = styled(baseH.withComponent('h4'))`
  ${fontSize(2)};
`;

let h5 = styled(baseH.withComponent('h5'))`
  ${fontSize(1)};
`;

let h6 = styled(baseH.withComponent('h6'))`
  ${fontSize(0)};
`;

const baseList = styled.div`
  margin-top: 0;
  margin-bottom: ${props => props.theme.baseline};
  padding: 0;
  list-style-position: inside;
  margin-bottom: ${props => props.theme.baseline};
  margin-left: ${props => unitCalc(props.theme.baseline, 2, '/')};
  ${fontSize(-1)};

  ul,
  ol {
    margin-bottom: 0;
  }

  ${props =>
    props.plain &&
    css`
      margin-left: 0;
      list-style: none;

      li {
        margin-left: 0;
      }
    `};
`;

let ol = baseList.withComponent('ol');

let ul = baseList.withComponent('ul');

let li = styled.li`
  list-style-position: outside;
  margin: ${props => unitCalc(props.theme.baseline, 4, '/')} 0
    ${props => unitCalc(props.theme.baseline, 4, '/')} 1.5rem;

  ul,
  ol {
    margin-bottom: 0;
  }
`;

const figure = styled.figure`
  margin: 0 0 1.55rem 0;
`;

export {
  html as CalciteHtml,
  body as CalciteBody,
  p as CalciteP,
  a as CalciteA,
  h1 as CalciteH1,
  h2 as CalciteH2,
  h3 as CalciteH3,
  h4 as CalciteH4,
  h5 as CalciteH5,
  h6 as CalciteH6,
  ol as CalciteOl,
  ul as CalciteUl,
  li as CalciteLi,
  figure as CalciteFigure
};
