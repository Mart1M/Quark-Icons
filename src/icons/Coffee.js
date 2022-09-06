import React from 'react';
import PropTypes from 'prop-types';

const Coffee = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3a1 1 0 00-2 0v3a1 1 0 002 0V3zm-5 8a3 3 0 013-3h13a4 4 0 010 8v1a5 5 0 01-5 5H7a5 5 0 01-5-5v-6zm18 1a2 2 0 01-2 2v-4a2 2 0 012 2zM5 10a1 1 0 00-1 1v6a3 3 0 003 3h6a3 3 0 003-3v-7H5zm5-8a1 1 0 011 1v3a1 1 0 11-2 0V3a1 1 0 011-1zm5 1a1 1 0 10-2 0v3a1 1 0 102 0V3z"
      ></path>
    </svg>
  );
};

Coffee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Coffee.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Coffee;
