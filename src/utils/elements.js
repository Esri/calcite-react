import styled from 'styled-components';

const a = styled.a`
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.linkHover};
    text-decoration: underline;
  }
`;

const h1 = styled.h1`
  font-weight: 300;
  font-style: normal;
  margin: 0 0 ${props => props.theme.baseline} 0;

  font-size: 2.40307rem;
  line-height: 3.1rem;
`;

const h4 = styled.h4`
  font-weight: 300;
  font-style: normal;
  margin: 0 0 ${props => props.theme.baseline} 0;

  font-size: 1.414rem;
  line-height: 1.55rem;
`;

const p = styled.p`
  margin-top: 0;
  margin-bottom: 1.55rem;
`;

const figure = styled.figure`
  margin: 0 0 1.55rem 0;
`;

export { a, h1, h4, p, figure };
