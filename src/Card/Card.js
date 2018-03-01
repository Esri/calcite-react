import PropTypes from 'prop-types';
import React from 'react';
import { StyledCard } from './Card-styled';

import { CardImage, CardContent } from './';

const Card = ({ children, bar, shaped, wide, withComponent, ...other }) => {
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

  let customCard;
  if (withComponent) {
    customCard = React.cloneElement(withComponent, {
      bar: bar,
      shaped: shaped,
      wide: wide,
      ...other,
      children: childrenWithProps
    });
  }

  const card = (
    <StyledCard bar={bar} shaped={shaped} wide={wide} {...other}>
      {childrenWithProps}
    </StyledCard>
  );

  return withComponent ? customCard : card;
};

Card.propTypes = {
  children: PropTypes.node,
  bar: PropTypes.string,
  shaped: PropTypes.bool,
  wide: PropTypes.bool
};

Card.defaultProps = {
  bar: '',
  shaped: undefined,
  wide: undefined
};

export default Card;
