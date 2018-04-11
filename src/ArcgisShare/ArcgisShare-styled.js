import styled from 'styled-components';
import CalciteTheme from '../theme/CalciteTheme';
import { unitCalc } from '../utils/helpers';

const StyledArcgisShare = styled.div``;

const StyledGroupContainer = styled.div`
  border: 1px solid ${props => props.theme.palette.lightestGray};
  padding: ${props => unitCalc(props.theme.baseline, 6, '/')};
  max-height: 150px;
  overflow-y: auto;
`;

const PrimaryCheckboxLabelStyles = {
  fontSize: '1rem',
  color: CalciteTheme.palette.black
};

const GroupCheckboxLabelStyles = {
  fontSize: '0.85rem'
};

const GroupFieldsetStyles = {
  marginLeft: '1.4rem',
  display: 'flex',
  alignItems: 'flex-start'
};

export {
  StyledArcgisShare,
  StyledGroupContainer,
  PrimaryCheckboxLabelStyles,
  GroupCheckboxLabelStyles,
  GroupFieldsetStyles
};
