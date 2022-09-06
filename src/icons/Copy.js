import React from 'react';
import PropTypes from 'prop-types';

const Copy = props => {
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
        d="M5 2a3 3 0 00-3 3v8a3 3 0 003 3h3v3a3 3 0 003 3h8a3 3 0 003-3v-8a3 3 0 00-3-3h-3V5a3 3 0 00-3-3H5zm9 6V5a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h3v-3a3 3 0 013-3h3zm-4 11a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1h-8a1 1 0 00-1 1v8z"
      ></path>
    </svg>
  );
};

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Copy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Copy;
