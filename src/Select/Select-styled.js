import styled, { css } from 'styled-components';
import { CalciteSelect } from '../utils/commonElements';
import { StyledMenu } from '../Menu/Menu-styled';

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
  position: absolute;
  left: 0;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

export {
  StyledSelectWrapper,
  StyledSelectInput,
  StyledSelectButton,
  StyledSelectMenu
};
