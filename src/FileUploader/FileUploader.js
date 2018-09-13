import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledFileUploader } from './FileUploader-styled';

const FileUploader = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledFileUploader ref={forwardedRef} as="input" {...other} type="file" />
  );
};

FileUploader.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

FileUploader.defaultProps = {};

export default withRefs(FileUploader);
