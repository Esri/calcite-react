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
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      padding-left: ${props => props.theme.baseline};

      ${props =>
        props.open === false &&
        css`
          border-top: none;
        `};
    `};

  ${props =>
    (props.minimal || props.selectable) &&
    css`
      background-color: unset;
      border: none;
    `};

  ${props =>
    props.selectable &&
    css`
      border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
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
    (props.minimal || props.selectable) &&
    css`
      background-color: unset;
      padding: ${props => unitCalc(props.theme.baseline, 3, '/')}
        ${props => unitCalc(props.theme.baseline, 4, '/')};
      border-top-color: ${props => props.theme.palette.lighterGray};

      &:hover {
        background-color: unset;
        color: ${props => props.theme.palette.offBlack};
      }

      ${props =>
        props.open &&
        css`
          font-weight: 600;
        `};
    `};

  ${props =>
    props.selectable &&
    css`
      border-top: none;
      box-shadow: inset 3px 0 0 transparent;
      padding-left: calc(
        ${props => unitCalc(props.theme.baseline, 4, '/')} + 3px
      );

      &:hover {
        background-color: ${props => props.theme.palette.white};
      }

      ${props =>
        props.active &&
        css`
          background-color: ${props => props.theme.palette.white};
          box-shadow: inset 3px 0 0 ${props => props.theme.palette.blue};
        `};

      ${props =>
        props.filterItem &&
        css`
          padding: 0;

          &:hover {
            background-color: unset;
          }
        `};
    `};

  ${props =>
    props.nested &&
    css`
      &:first-child {
        border-top: none;
      }

      ${props =>
        (props.minimal || props.selectable) &&
        css`
          border: none;
          padding: 0 ${props => unitCalc(props.theme.baseline, 2, '/')};
          position: relative;

          &::before {
            position: absolute;
            color: #cccccc;
            opacity: 0;
            -webkit-transition: opacity 50ms linear;
            -o-transition: opacity 50ms linear;
            transition: opacity 50ms linear;
            pointer-events: none;
            content: '•';
            font-size: 0.8em;
            left: 0;
          }

          ${props =>
            props.active &&
            css`
              font-weight: 600;
              background-color: unset;

              &::before {
                opacity: 1;
                color: #005e95;
              }
            `};

          &:hover {
            text-decoration: underline;

            &::before {
              opacity: 1;
            }
          }
        `};
    `};
`;

const StyledListHeader = styled(StyledListItem)`
  background-color: ${props => props.theme.palette.offWhite};
  cursor: auto;

  ${props =>
    (props.minimal || props.selectable) &&
    css`
      border: none;
      background-color: unset;
      padding: ${props => unitCalc(props.theme.baseline, 3, '/')} 0;
      font-weight: 600;
      ${fontSize(0)};

      &:hover {
        background-color: unset;
        color: ${props => props.theme.palette.darkerGray};
      }
    `};
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

    ${props =>
      (props.minimal || props.selectable) &&
      css`
        margin-right: ${props => unitCalc(props.theme.baseline, 4, '/')};
      `};
  }

  &:last-child {
    margin-left: ${props => unitCalc(props.theme.baseline, 2, '/')};

    ${props =>
      (props.minimal || props.selectable) &&
      css`
        margin-left: ${props => unitCalc(props.theme.baseline, 4, '/')};
        font-size: 0.9rem;
        font-weight: 400;

        a {
          color: ${props => props.theme.palette.darkerGray};

          &:hover {
            color: ${props => props.theme.palette.offBlack};
          }
        }
      `};
  }

  svg {
    ${props =>
      (props.minimal || props.selectable) &&
      css`
        width: auto;
        height: auto;
      `};

    ${props =>
      props.selectable &&
      props.active &&
      css`
        fill: ${props => props.theme.palette.blue};
      `};
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
