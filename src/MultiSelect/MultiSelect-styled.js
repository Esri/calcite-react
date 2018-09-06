import styled, { css } from 'styled-components';
import { CalciteSelect } from '../utils/commonElements';
import { StyledMenu } from '../Menu/Menu-styled';
import { transition } from '../utils/helpers';

const StyledMultiSelectWrapper = styled.div`
  position: relative;
`;

let StyledMultiSelectButton = CalciteSelect.withComponent('button');
StyledMultiSelectButton = styled(StyledMultiSelectButton)`
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;

const StyledMultiSelectMenu = styled(StyledMenu)`
  transition: opacity ${transition()},
  z-index: 2000;

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
