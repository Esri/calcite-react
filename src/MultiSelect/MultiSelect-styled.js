import styled, { css } from 'styled-components';
import { CalciteSelect } from '../utils/commonElements';
import Menu from '../Menu';
import { transition } from '../utils/helpers';

const StyledMultiSelectWrapper = styled.div`
  position: relative;
`;

const StyledMultiSelectButton = styled(CalciteSelect)`
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;

const StyledMultiSelectMenu = styled(Menu)`
  max-height: 300px;
  transition: opacity ${transition()},
  z-index: 2000;
  display: none;

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `};

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

export {
  StyledMultiSelectWrapper,
  StyledMultiSelectButton,
  StyledMultiSelectMenu
};
