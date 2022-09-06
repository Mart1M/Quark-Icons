import React from 'react';
import PropTypes from 'prop-types';

const FileText = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M8 8a1 1 0 000 2h3a1 1 0 100-2H8z"></path>
      <path d="M8 12a1 1 0 100 2h8a1 1 0 100-2H8z"></path>
      <path d="M7 17a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V8a1 1 0 00-.293-.707l-5-5A1 1 0 0014 2H7zM6 5a1 1 0 011-1h6v4a1 1 0 001 1h4v10a1 1 0 01-1 1H7a1 1 0 01-1-1V5zm10.586 2L15 5.414V7h1.586z"
      ></path>
    </svg>
  );
};

FileText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileText.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileText;
