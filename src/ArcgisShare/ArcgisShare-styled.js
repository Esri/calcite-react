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

import styled from 'styled-components';
import { CalciteTheme } from '../CalciteThemeProvider';
import { unitCalc } from '../utils/helpers';
import StarIcon from 'calcite-ui-icons-react/StarIcon';
import { Legend } from '../Form';

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

const StyledLegend = styled(Legend)`
  font-size: 1rem;
`;

export {
  StyledArcgisShare,
  StyledGroupContainer,
  PrimaryCheckboxLabelStyles,
  GroupCheckboxLabelStyles,
  GroupFieldsetStyles,
  StyledStarIcon,
  StyledLegend
};
