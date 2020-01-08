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
import { StyledAccordionSection } from './Accordion-styled';

import { getChildType } from '../utils/helpers';

const AccordionSection = ({
  children,
  active,
  sectionIndex,
  onAccordionChange,
  iconPosition,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case 'AccordionTitle':
        let title;
        title = React.cloneElement(child, {
          key: i,
          active,
          sectionIndex,
          onAccordionChange,
          iconPosition
        });
        return title;
      case 'AccordionContent':
        let content;
        content = React.cloneElement(child, {
          key: i,
          active,
          sectionIndex
        });
        return content;
      default:
        return child;
    }
  });

  return (
    <StyledAccordionSection {...other}>
      {childrenWithProps}
    </StyledAccordionSection>
  );
};

AccordionSection.propTypes = {
  /** The content of the component; should be AccordionTitle and AccordionContent. */
  children: PropTypes.node
};

AccordionSection.defaultProps = {
  onAccordionChange: () => {}
};

AccordionSection.displayName = 'AccordionSection';

export default AccordionSection;
