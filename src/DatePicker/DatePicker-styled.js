import styled from 'styled-components';

const StyledDatePickerContainer = styled.div`
  &,
  & input {
    font-family: ${props => props.theme.type.avenirFamily};
    font-weight: 400 !important;
  }

  &,
  & * {
    box-sizing: border-box;
  }
`;

export { StyledDatePickerContainer };
