import styled from 'styled-components';
import CalciteTheme from '../theme/CalciteTheme';
import { unitCalc } from '../utils/helpers';

const StyledArcgisShare = styled.div``;

const StyledGroupContainer = styled.div`
  border: 1px solid ${props => props.theme.palette.lightestGray};
  padding: ${props => unitCalc(props.theme.baseline, 6, '/')};
  min-width: 180px;
  max-height: 150px;
  min-height: 95px;
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

const GroupFavStyles = {
  width: 14,
  height: 14,
  fill: CalciteTheme.palette.lighterGray,
  verticalAlign: 'text-top',
  marginLeft: '2px'
};

export {
  StyledArcgisShare,
  StyledGroupContainer,
  PrimaryCheckboxLabelStyles,
  GroupCheckboxLabelStyles,
  GroupFieldsetStyles,
  GroupFavStyles
};
