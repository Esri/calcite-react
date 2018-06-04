import styled from 'styled-components';
import { CalciteSelect } from '../utils/commonElements';
import { StyledMenu } from '../Menu/Menu-styled';

const StyledMultiSelectWrapper = styled.div`
  position: relative;
`;

let StyledMultiSelectButton = CalciteSelect.withComponent('button');
StyledMultiSelectButton = StyledMultiSelectButton.extend`
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
