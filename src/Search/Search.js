import PropTypes from 'prop-types';
import React from 'react';
import { StyledSearchContainer, StyledSearch } from './Search-styled';

import MagnifyIcon from '../icons/MagnifyIcon';
import CloseCircleIcon from '../icons/CloseCircleIcon';

const Search = ({
  children,
  value,
  minimal,
  placeholder,
  onRequestClear,
  onChange,
  ...other
}) => {
  let clearSearchIcon;
  if (value) {
    clearSearchIcon = (
      <CloseCircleIcon onClick={onRequestClear} className="search-close-icon" />
    );
  }

  const search = (
    <StyledSearchContainer minimal={minimal}>
      <MagnifyIcon />
      <StyledSearch
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        minimal={minimal}
        {...other}
      />
      {clearSearchIcon}
    </StyledSearchContainer>
  );

  return search;
};

Search.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onRequestClear: PropTypes.func,
  minimal: PropTypes.bool
};

Search.defaultProps = {
  placeholder: 'Search...'
};

export default Search;
