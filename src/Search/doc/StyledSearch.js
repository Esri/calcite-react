import styled from 'styled-components';
import Search from '../../Search';

// Calcite theme
import { CalciteTheme as theme } from '../../CalciteThemeProvider';

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
StyledSearch.defaultProps = { theme };

export default StyledSearch;
