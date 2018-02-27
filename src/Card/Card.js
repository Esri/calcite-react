import PropTypes from 'prop-types';
import React from 'react';
import { StyledCard } from './Card-styled';

import { CardImage, CardContent } from './';

const Card = ({ children, bar, shaped, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case CardImage:
      case CardContent:
        return React.cloneElement(child, {
          shaped
        });
      default:
        return child;
    }
  });

  const card = (
    <StyledCard bar shaped {...other}>
      {childrenWithProps}
    </StyledCard>
  );

  return card;
};

Card.propTypes = {
  children: PropTypes.node,
  bar: PropTypes.string,
  shaped: PropTypes.bool
};

Card.defaultProps = {
  shaped: false
};

export default Card;
