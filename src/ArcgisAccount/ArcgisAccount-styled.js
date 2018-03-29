import styled, { css } from 'styled-components';
import { fontSize, unitCalc } from '../utils/helpers';

const StyledArcgisAccountControl = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.darkestGray};
  cursor: pointer;
  height: 62px;
  padding: ${props => unitCalc(props.theme.baseline, 2, '/')}
    ${props => props.theme.baseline}
    ${props => unitCalc(props.theme.baseline, 2, '/')}
    ${props => unitCalc(props.theme.baseline, 1.5, '/')};
  box-sizing: border-box;
  border-left: 1px solid ${props => props.theme.palette.lighterGray};
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.palette.black};
    box-shadow: inset 0 -3px 0 0 ${props => props.theme.palette.lighterBlue};
  }

  &:active {
    color: ${props => props.theme.palette.black};
    box-shadow: inset 0 -3px 0 0 ${props => props.theme.palette.blue};
  }

  ${props =>
    props.open &&
    css`
      &,
      &:hover {
        color: ${props => props.theme.palette.black};
        box-shadow: inset 0 -3px 0 0 ${props => props.theme.palette.blue};
      }
    `};
`;

const StyledArcgisAccountControlAvatar = styled.div`
  margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};
`;

const StyledArcgisAccountControlNames = styled.div`
  flex: 1 0 50px;
  display: flex;
  flex-direction: column;
`;
const StyledArcgisAccountControlFriendlyName = styled.span`
  font-weight: 600;
  ${fontSize(-1)};
  line-height: 20px;
`;
const StyledArcgisAccountControlUsername = styled.span`
  font-weight: 300;
  ${fontSize(-2)};
  line-height: 16px;
`;

const StyledArcgisAccountMenu = styled.div`
  background: ${props => props.theme.palette.white};
  box-shadow: ${props => props.theme.boxShadow};
`;

const StyledArcgisAccountContent = styled.div`
  display: flex;
  min-height: 210px;
  padding-top: ${props => unitCalc(props.theme.baseline, 2, '*')};
`;
const StyledArcgisAccountContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 50px;
`;
const StyledArcgisAccountContentName = styled.span`
  ${fontSize(1)};
  font-weight: 600;
  display: inline-block;
  margin-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};
`;
const StyledArcgisAccountContentId = styled.span`
  ${fontSize(-2)};
  font-weight: 300;
  line-height: 20px;
`;
const StyledArcgisAccountContentGroup = styled.span`
  ${fontSize(-2)};
  font-weight: 300;
  line-height: 20px;
  margin-bottom: ${props => unitCalc(props.theme.baseline, 1.5, '*')};
  text-align: center;
`;

const StyledArcgisAccountContentMenu = styled.div`
  flex: 1 0 50px;
  padding-left: ${props => props.theme.baseline};
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StyledArcgisAccountSignInMenu = styled.div``;

const StyledArcgisAccountMenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.palette.blue};
  display: block;
  ${fontSize(0)};
  line-height: 20px;
  font-weight: 300;
  padding: 5px 0;
  position: relative;

  &::after {
    right: -8px;
    opacity: 0;
    position: absolute;
    width: 12px;
    height: 12px;
    transition: opacity 0.25s, transform 0.25s;
    background-color: ${props => props.theme.palette.white};

    content: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='%230079c1'%3E%3Cpath d='M8 14.3L13.3 9H0V8h13.3L8 2.7V1.3l7.2 7.2L8 15.7v-1.4z'/%3E%3C/svg%3E");
    top: calc(50% - 20px / 2);
  }

  &:hover {
    color: ${props => props.theme.palette.darkBlue};

    &::after {
      opacity: 1;
      transform: translateX(10px);
    }
  }
`;

export {
  StyledArcgisAccountControl,
  StyledArcgisAccountControlAvatar,
  StyledArcgisAccountControlNames,
  StyledArcgisAccountControlFriendlyName,
  StyledArcgisAccountControlUsername,
  StyledArcgisAccountMenu,
  StyledArcgisAccountContent,
  StyledArcgisAccountContentInfo,
  StyledArcgisAccountContentName,
  StyledArcgisAccountContentId,
  StyledArcgisAccountContentGroup,
  StyledArcgisAccountContentMenu,
  StyledArcgisAccountSignInMenu,
  StyledArcgisAccountMenuItem
};
