import React from 'react';
import PropTypes from 'prop-types';

const CheckRounded = props => {
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
        d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.15 8.24a1 1 0 01.11 1.41l-6 7a1 1 0 01-1.467.057l-3-3a1 1 0 111.414-1.414l2.236 2.236 5.298-6.18a1 1 0 011.41-.108z"
      ></path>
    </svg>
  );
};

CheckRounded.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckRounded.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckRounded;
