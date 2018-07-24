import styled, { css } from 'styled-components';
import { CalciteSelect } from '../utils/commonElements';
import { StyledMenu } from '../Menu/Menu-styled';
import { transition } from '../utils/helpers';

const StyledSelectWrapper = styled.div`
  position: relative;
`;

let StyledSelectInput = CalciteSelect.withComponent('input');
StyledSelectInput = StyledSelectInput.extend`
  cursor: pointer;
  text-overflow: ellipsis;
`;

let StyledSelectButton = CalciteSelect.withComponent('button');
StyledSelectButton = StyledSelectButton.extend`
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledSelectMenu = StyledMenu.extend`
  transition: opacity ${transition()};
  z-index: 2000;

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
