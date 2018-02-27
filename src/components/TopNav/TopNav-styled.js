import styled, { css } from 'styled-components';
import { clearfix, fontSize } from '../../utils/helpers';
import { a } from '../../utils/elements';

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
  ${props => fontSize(-1, props.theme)};
  color: ${props => props.theme.palette.offBlack};
  padding-top: 1.1625rem;
  padding-bottom: calc(1.1625rem - 4px);
  border-bottom: 4px solid transparent;
  line-height: 1.5rem;
  display: inline-block;
  vertical-align: top;
  margin-left: .75em;

  &:first-child {
    margin-left: 0;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.palette.blue};
    border-bottom-color: ${props => props.theme.palette.blue};
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &.is-active {
    border-bottom-color: ${props => props.theme.palette.blue};
  }
`;

const StyledTopNavList = styled.nav`
  padding: 0;
  flex: 1 0 auto;

  ${props =>
    props.right &&
    css`
      float: right;
    `};
`;

const StyledTopNavTitle = a.extend`
  font-size: 1.2019rem;
  margin-right: 1.5rem;
  padding-top: 1.125rem;
  padding-bottom: 1.25rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.offBlack};

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
