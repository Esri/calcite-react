import styled, { css } from 'styled-components';

const StyledLabel = styled.mark`
  background-color: ${props => props.theme.palette.lightestGray};
  padding: 0.25em 0.5em;
  border-radius: 3px;
  font-size: 0.85em;
  line-height: 1;
  white-space: nowrap;

  ${props =>
    props.red &&
    css`
      background-color: ${props => props.theme.palette.red};
      color: ${props => props.theme.palette.white};
    `};

  ${props =>
    props.yellow &&
    css`
      background-color: ${props => props.theme.palette.lightYellow};
      color: ${props => props.theme.palette.offBlack};
    `};

  ${props =>
    props.green &&
    css`
      background-color: ${props => props.theme.palette.green};
      color: ${props => props.theme.palette.white};
    `};

  ${props =>
    props.blue &&
    css`
      background-color: ${props => props.theme.palette.blue};
      color: ${props => props.theme.palette.white};
    `};
`;

export { StyledLabel };
