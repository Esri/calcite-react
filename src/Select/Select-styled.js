import styled, { css } from 'styled-components';
import { CalciteSelect } from '../utils/commonElements';
import Menu from '../Menu';
import { transition } from '../utils/helpers';

const StyledSelectWrapper = styled.div`
  position: relative;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

const StyledSelectInput = styled(CalciteSelect)`
  cursor: pointer;
  text-overflow: ellipsis;
`;

const StyledSelectButton = styled(CalciteSelect)`
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledSelectMenu = styled(Menu)`
  max-height: 300px;
  display: none;
  border-bottom: none;
  box-shadow: ${props => props.theme.boxShadow},
    0 1px 0 ${props => props.theme.palette.lightestGray};
  transition: opacity ${transition()};
  z-index: 2000;

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `};

  ${props =>
    props.fullWidth &&
    css`
      min-width: 100%;
    `};
`;

const PopperManagerStyles = {
  width: '100%'
};

export {
  StyledSelectWrapper,
  StyledSelectInput,
  StyledSelectButton,
  StyledSelectMenu,
  PopperManagerStyles
};
