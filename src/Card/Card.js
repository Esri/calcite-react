import PropTypes from 'prop-types';
import React from 'react';
import { StyledCard } from './Card-styled';

import { CardImage, CardContent } from './';

const Card = ({ children, bar, shaped, wide, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case CardImage:
        return React.cloneElement(child, {
          shaped,
          wide
        });
      case CardContent:
        return React.cloneElement(child, {
          shaped,
          wide
        });
      default:
        return child;
    }
  });

  const card = (
    <StyledCard bar={bar} shaped={shaped} wide={wide} {...other}>
      {childrenWithProps}
    </StyledCard>
  );

  return card;
};

Card.propTypes = {
  children: PropTypes.node,
  bar: PropTypes.string,
  shaped: PropTypes.bool,
  wide: PropTypes.bool
};

Card.defaultProps = {
  bar: '',
  shaped: false,
  wide: false
};

export default Card;
