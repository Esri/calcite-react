import React from 'react';

const withRefs = Component => {
  return React.forwardRef((props, ref) => {
    return <Component forwardedRef={ref || props.forwardedRef} {...props} />;
  });
};

export default withRefs;
