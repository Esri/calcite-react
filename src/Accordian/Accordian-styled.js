import styled, { css } from 'styled-components';
import { transition } from '../utils/helpers';
import { StyledSideNav, StyledSideNavTitle } from '../SideNav/SideNav-styled';

const StyledAccordian = StyledSideNav.extend``;

const StyledAccordianSection = styled.div``;

const StyledAccordianTitle = StyledSideNavTitle.extend`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    transition: all, ${transition()};
    background-color: ${props => props.theme.palette.lightestGray};
    outline: none;
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;

const StyledAccordianContent = styled.div`
  display: none;

  ${props =>
    props.active &&
    css`
      display: block;
    `};
`;

const ArrowIconStyles = {
  width: 20,
  height: 20
};

export {
  StyledAccordian,
  StyledAccordianTitle,
  StyledAccordianSection,
  StyledAccordianContent,
  ArrowIconStyles
};
