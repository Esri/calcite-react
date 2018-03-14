import styled from 'styled-components';
import { select as CalciteSelect } from '../utils/elements';
import { StyledMenu } from '../Menu/Menu-styled';

const StyledMultiSelectWrapper = styled.div`
  position: relative;
`;

let StyledMultiSelectButton = CalciteSelect.withComponent('button');
StyledMultiSelectButton = StyledMultiSelectButton.extend`
  cursor: pointer;
`;

const StyledMultiSelectMenu = StyledMenu.extend`
  position: absolute;
  left: 0;
`;

export {
  StyledMultiSelectWrapper,
  StyledMultiSelectButton,
  StyledMultiSelectMenu
};
