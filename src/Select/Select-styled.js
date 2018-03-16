import styled, { css } from 'styled-components';
import { CalciteSelect } from '../utils/elements';
import { StyledMenu } from '../Menu/Menu-styled';

const StyledSelectWrapper = styled.div`
  position: relative;
`;

let StyledSelectInput = CalciteSelect.withComponent('input');
StyledSelectInput = StyledSelectInput.extend`
  cursor: pointer;
`;

let StyledSelectButton = CalciteSelect.withComponent('button');
StyledSelectButton = StyledSelectButton.extend`
  cursor: pointer;
  text-align: left;
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
