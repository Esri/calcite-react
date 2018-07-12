import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledCardContent } from './Card-styled';

import { CardTitle } from './';

const CardContent = ({ children, wide, shaped, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case CardTitle:
        return React.cloneElement(child, {
          wide,
          shaped
        });
      default:
        return child;
    }
  });

  const panelText = (
    <StyledCardContent shaped={shaped} wide={wide} {...other}>
      {childrenWithProps}
    </StyledCardContent>
  );

  return panelText;
};

CardContent.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  wide: PropTypes.bool,
  /** Description TBD */
  shaped: PropTypes.bool
};

CardContent.defaultProps = {};

export default CardContent;
