import React from 'react';
import PropTypes from 'prop-types';

const Trashcan = props => {
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
        d="M5 6a1 1 0 011 1v12a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 112 0v12a3 3 0 01-3 3H7a3 3 0 01-3-3V7a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 10a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a3 3 0 00-3 3H7a5 5 0 0110 0h-2a3 3 0 00-3-3z"
      ></path>
    </svg>
  );
};

Trashcan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Trashcan.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Trashcan;
