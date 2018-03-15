import styled from 'styled-components';
import { fontSize, unitCalc } from '../utils/helpers';

import { baseRadioCheckbox } from '../utils/elements';

const StyledRadio = baseRadioCheckbox.extend`
  -webkit-appearance: radio;
  border-radius: 50%;
  margin-right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  cursor: pointer;
`;

const StyledRadioLabel = styled.span`
  ${fontSize(-1)};
  color: ${props => props.theme.palette.darkestGray};
  width: auto;
  margin-right: ${props => props.theme.baseline};
  cursor: pointer;
`;
const StyledRadioGroup = styled.label`
  display: flex;
  align-items: center;
`;

export { StyledRadio, StyledRadioLabel, StyledRadioGroup };
