import React from 'react';
import styled from 'styled-components';

const GuideExampleContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  position: relative;
  clear: both;

  &:first-child {
    border-top: 1px solid #efefef;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  &:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`;

const GuideExampleLabel = styled.code`
  border-radius: 0 0 0 3px;
  position: absolute;
  top: -1px;
  right: -1px;
  padding-left: 3px;
  padding-right: 3px;
  z-index: 101;

  *:first-child & {
    border-radius: 0 3px 0 3px;
  }
`;

const GuideExample = ({ children, label, style, ...other }) => {
  function _getLabel() {
    if (label) {
      return <GuideExampleLabel>{label}</GuideExampleLabel>;
    }
    return null;
  }

  return (
    <GuideExampleContainer style={style} {...other}>
      {children}
      {_getLabel()}
    </GuideExampleContainer>
  );
};

export default GuideExample;
