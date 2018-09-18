// Framework and third-party non-ui
import React from 'react';
import styled from 'styled-components';

import Button from '../../Button';
import Tooltip from '../../Tooltip';

import InformationIcon from 'calcite-ui-icons-react/InformationIcon';

const StyledToasterExample = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToasterExampleComponent = props => {
  return (
    <StyledToasterExample>
      <span>A Toaster Was Added</span>
      <Tooltip title="More Info" placement="left">
        <Button
          onClick={props.onInfoClick}
          type="button"
          iconButton
          icon={<InformationIcon />}
        />
      </Tooltip>
    </StyledToasterExample>
  );
};

export default ToasterExampleComponent;
