// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

// styled-components
import styled from 'styled-components';

// Utils, common elements
import { unitCalc, fontSize } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { Legend } from '../Form';

// Icons
import StarIcon from 'calcite-ui-icons-react/StarIcon';

// Third party libraries

const StyledArcgisShare = styled.div``;
StyledArcgisShare.defaultProps = { theme };

const StyledGroupContainer = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.palette.lightestGray};
  padding: ${props => unitCalc(props.theme.baseline, 6, '/')};
  min-width: 180px;
  max-height: 150px;
  min-height: 95px;
  overflow-y: auto;
  border-radius: ${props => props.theme.borderRadius};
`;
StyledGroupContainer.defaultProps = { theme };

const PrimaryCheckboxLabelStyles = {
  fontSize: '1rem',
  color: theme.palette.black
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
StyledStarIcon.defaultProps = { theme };

const StyledLegend = styled(Legend)`
  font-size: 1rem;
`;
StyledLegend.defaultProps = { theme };

const StyledNoGroups = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 170px;
  padding: 0 ${props => unitCalc(props.theme.baseline, 6, '/')};
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${props => props.theme.palette.lightGray};
  ${fontSize(-2)};
`;
StyledNoGroups.defaultProps = { theme };

export {
  StyledArcgisShare,
  StyledGroupContainer,
  PrimaryCheckboxLabelStyles,
  GroupCheckboxLabelStyles,
  GroupFieldsetStyles,
  StyledStarIcon,
  StyledLegend,
  StyledNoGroups
};
