import styled, { css } from 'styled-components';
import { clearfix, fontSize } from '../utils/helpers';
import { a } from '../utils/elements';

const StyledTopNav = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.palette.lightestGray};
  background-color: ${props => props.theme.palette.white};
  z-index: 100;
  ${clearfix()};
`;

const StyledTopNavActions = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${props => props.theme.baseline};

  > * {
    margin-left: 0.75em;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const StyledTopNavBrandLink = styled.a`
  padding: 0 ${props => props.theme.baseline};
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

const StyledTopNavBrandImg = styled.img`
  height: 30px;
`;

const StyledTopNavLink = a.extend`
  ${fontSize(0)};
  color: ${props => props.theme.palette.darkGray};
  padding-top: 1.1625rem;
  padding-bottom: calc(1.1625rem - 4px);
  border-bottom: 4px solid transparent;
  line-height: 1.5rem;
  display: inline-block;
  vertical-align: top;
  margin-left: .75em;
  font-weight: 300;

  &:hover,
  &:focus {
    color: ${props => props.theme.palette.blue};
    border-bottom-color: ${props => props.theme.palette.blue};
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.palette.offBlack};
      border-bottom-color: ${props.theme.palette.blue};
    `};

  .active > & {
    color: ${props => props.theme.palette.offBlack};
    border-bottom-color: ${props => props.theme.palette.blue};
  }
`;

const StyledTopNavList = styled.nav`
  padding: 0;
  flex: 1 0 auto;
  margin-left: -0.75em;

  ${props =>
    props.right &&
    css`
      float: right;
    `};
`;

const StyledTopNavTitle = a.extend`
  margin-right: 1.5rem;
  padding-top: 1.125rem;
  padding-bottom: 1.25rem;
  ${fontSize(1)};
  color: ${props => props.theme.palette.black};

  &:hover {
    text-decoration: none;
  }
`;

export {
  StyledTopNav,
  StyledTopNavActions,
  StyledTopNavBrandLink,
  StyledTopNavBrandImg,
  StyledTopNavLink,
  StyledTopNavList,
  StyledTopNavTitle
};
