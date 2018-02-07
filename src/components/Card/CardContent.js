import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const CardContent = ({ children, wide, shaped, ...other }) => {
  const StyledCardContent = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    word-wrap: break-word;

    ${wide &&
      css`
        display: block;
        flex: 1 1 75%;
      `};

    ${props =>
      shaped &&
      css`
        border: 1px solid ${props => props.theme.palette.transparentOffWhite};
        box-shadow: ${props => props.theme.boxShadow};
        padding-top: 4rem;
      `};
  `;

  const panelText = (
    <StyledCardContent {...other}>{children}</StyledCardContent>
  );

  return panelText;
};

CardContent.propTypes = {
  children: PropTypes.node,
  wide: PropTypes.bool,
  shaped: PropTypes.bool
};

CardContent.defaultProps = {};

export default CardContent;
