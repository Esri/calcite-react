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

import React from 'react';
import PropTypes from 'prop-types';

import { StyledProgress, Track, Bar, Text } from './Progress-styled';

const Progress = ({
  reversed = false,
  text = null,
  type = 'determinate',
  value = 0
}) => {
  return (
    <StyledProgress>
      <Track>
        <Bar reversed={reversed} type={type} value={value} />
      </Track>
      {text && <Text>{text}</Text>}
    </StyledProgress>
  );
};

Progress.propTypes = {
  /** Fill bar in the opposite direction */
  reversed: PropTypes.bool,
  /** Text label for the progress indicator	 */
  text: PropTypes.string,
  /** Use indeterminate if finding actual progress value is impossible */
  type: PropTypes.oneOf(['determinate', 'indeterminate']),
  /** Percent complete of 100 */
  value: PropTypes.number
};

export default Progress;
