import styled from 'styled-components';
import Search from '../../Search';

const StyledSearch = styled(Search)`
  color: ${props => props.theme.palette.white};
  border-bottom-color: ${props => props.theme.palette.lightBlue};

  &::placeholder {
    color: ${props => props.theme.palette.lighterBlue};
  }

  &:focus {
    border-bottom-color: ${props => props.theme.palette.white};
  }
`;

export default StyledSearch;
