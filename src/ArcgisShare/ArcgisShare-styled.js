import styled from 'styled-components';
import { CalciteTheme } from '../CalciteThemeProvider';
import { unitCalc } from '../utils/helpers';
import StarIcon from 'calcite-ui-icons-react/StarIcon';

const StyledArcgisShare = styled.div``;

const StyledGroupContainer = styled.div`
  border: 1px solid ${props => props.theme.palette.lightestGray};
  padding: ${props => unitCalc(props.theme.baseline, 6, '/')};
  min-width: 180px;
  max-height: 150px;
  min-height: 95px;
  overflow-y: auto;
  border-radius: ${props => props.theme.borderRadius};
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

const StyledStarIcon = styled(StarIcon)`
  fill: ${props => props.theme.palette.lighterGray};
  vertical-align: text-top;
  margin-left: 2px;
`;

export {
  StyledArcgisShare,
  StyledGroupContainer,
  PrimaryCheckboxLabelStyles,
  GroupCheckboxLabelStyles,
  GroupFieldsetStyles,
  StyledStarIcon
};
