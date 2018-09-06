import PropTypes from 'prop-types';
import React from 'react';
import { StyledFileUploader } from './FileUploader-styled';

const FileUploader = ({ children, ...other }) => {
  return <StyledFileUploader {...other} type="file" />;
};

FileUploader.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

FileUploader.defaultProps = {};

export default FileUploader;
