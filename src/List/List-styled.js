import styled, { css } from 'styled-components';
import { StyledSideNav } from '../SideNav/SideNav-styled';
import { unitCalc, fontSize } from '../utils/helpers';

const StyledList = styled(StyledSideNav)`
  min-width: 200px;
  overflow: hidden;
  max-height: ${props => props.maxHeight};
  transition: max-height 225ms cubic-bezier(0.4, 0, 0.2, 1);

  ${props =>
    props.nested &&
    css`
      border: none;
      border-top: 1px solid ${props => props.theme.palette.lightestGray};
      padding-left: ${props => props.theme.baseline};

      ${props =>
        props.open === false &&
        css`
          border-top: none;
        `};
    `};
`;

const getActiveStyles = props => {
  return `
    background-color: ${props.theme.palette.offWhite};
    text-decoration: none;
    color: ${props.theme.palette.darkerGray};
  `;
};

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')}
    ${props => unitCalc(props.theme.baseline, 2, '/')};
  color: ${props => props.theme.palette.darkerGray};
  background-color: ${props => props.theme.palette.white};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      ${props => getActiveStyles(props)};
    `};
  &:hover {
    ${props => getActiveStyles(props)};
  }

  ${props =>
    props.selected &&
    css`
      &,
      &:focus,
      &:hover {
        text-indent: -3px;
        border-left: 3px solid ${props => props.theme.palette.blue};
      }
    `};

  ${props =>
    props.nested &&
    css`
      &:first-child {
        border-top: none;
      }
    `};
`;

const StyledListHeader = styled(StyledListItem.withComponent('span'))`
  background-color: ${props => props.theme.palette.offWhite};
  cursor: auto;
`;

const StyledListTitle = styled.p`
  ${fontSize(-1)};
  margin: 0;
`;

const StyledListSubtitle = styled.span`
  ${fontSize(-3)};
  line-height: 1.2rem;
  color: ${props => props.theme.palette.gray};
`;

const StyledListTextContainer = styled.div`
  display: flex;
  flex: 1 0 100px;
  flex-direction: column;
  justify-content: center;
`;

const StyledListSideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};
  }

  &:last-child {
    margin-left: ${props => unitCalc(props.theme.baseline, 2, '/')};
  }

  .mdi-icon {
    width: 28px;
    height: 28px;
    fill: currentColor;

    ${props =>
      props.nested &&
      css`
        width: 22px;
        height: 22px;
      `};
  }
`;

export {
  StyledList,
  StyledListItem,
  StyledListHeader,
  StyledListTitle,
  StyledListSubtitle,
  StyledListTextContainer,
  StyledListSideContainer
};
