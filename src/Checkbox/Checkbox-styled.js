import styled from 'styled-components';
import { fontSize, unitCalc } from '../utils/helpers';

import { baseRadioCheckbox } from '../utils/commonElements';

const StyledCheckbox = styled(baseRadioCheckbox)`
  -webkit-appearance: checkbox;
  margin-right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  cursor: pointer;
`;

const StyledCheckboxLabel = styled.span`
  ${fontSize(-1)};
  color: ${props => props.theme.palette.darkestGray};
  width: auto;
  margin-right: ${props => props.theme.baseline};
  cursor: pointer;
`;
const StyledCheckboxGroup = styled.label`
  display: flex;
  align-items: center;
`;

export { StyledCheckbox, StyledCheckboxLabel, StyledCheckboxGroup };
