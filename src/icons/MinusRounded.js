import React from 'react';
import PropTypes from 'prop-types';

const MinusRounded = props => {
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
        d="M17.243 12a1 1 0 01-1 1H7.757a1 1 0 110-2h8.486a1 1 0 011 1z"
      ></path>
    </svg>
  );
};

MinusRounded.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MinusRounded.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MinusRounded;
