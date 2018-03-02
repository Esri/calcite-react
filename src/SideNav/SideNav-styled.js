import styled, { css } from 'styled-components';
import { h4, a } from '../utils/elements';
import { unitCalc, fontSize } from '../utils/helpers';
import { avenirRegular } from '../utils/type';

const StyledSideNav = styled.aside`
  box-sizing: border-box;
  padding: 0;
  border: 1px solid ${props => props.theme.palette.lightestGray};
  border-top: none;
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.palette.white};
`;

const StyledSideNavTitle = h4.extend`
  margin: 0;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  ${avenirRegular()};
  ${fontSize(-1)};
  background-color: ${props => props.theme.palette.offWhite};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
`;

const StyledSideNavLink = a.extend`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  ${fontSize(-2)};
  color: ${props => props.theme.palette.darkestGray};
  background-color: ${props => props.theme.palette.white};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.palette.offWhite};
    text-decoration: none;
    color: ${props => props.theme.palette.offBlack};
  }

  ${props =>
    props.active &&
    css`
      text-indent: -3px;
      border-left: 3px solid ${props => props.theme.palette.blue};
    `};
`;

export { StyledSideNav, StyledSideNavTitle, StyledSideNavLink };
