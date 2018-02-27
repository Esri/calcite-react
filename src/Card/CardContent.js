import PropTypes from 'prop-types';
import React from 'react';
import { StyledCardContent } from './Card-styled';

import { CardTitle } from './';

const CardContent = ({ children, wide, shaped, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
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
  children: PropTypes.node,
  wide: PropTypes.bool,
  shaped: PropTypes.bool
};

CardContent.defaultProps = {
  wide: false,
  shaped: false
};

export default CardContent;
