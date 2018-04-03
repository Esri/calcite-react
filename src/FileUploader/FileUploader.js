import PropTypes from 'prop-types';
import React from 'react';
import { StyledFileUploader } from './FileUploader-styled';

const FileUploader = ({ children, ...other }) => {
  const fileUploader = <StyledFileUploader type="file" {...other} />;

  return fileUploader;
};

FileUploader.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

FileUploader.defaultProps = {};

export default FileUploader;
