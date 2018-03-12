import styled from 'styled-components';
import { select as CalciteSelect } from '../utils/elements';
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
`;

const StyledSelectMenu = StyledMenu.extend`
  position: absolute;
  left: 0;
`;

export {
  StyledSelectWrapper,
  StyledSelectInput,
  StyledSelectButton,
  StyledSelectMenu
};
