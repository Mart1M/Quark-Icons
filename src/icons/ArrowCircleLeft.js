import React from 'react';
import PropTypes from 'prop-types';

const ArrowCircleLeft = props => {
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
        d="M11.707 8.293a1 1 0 010 1.414L10.414 11H16a1 1 0 110 2h-5.586l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
      ></path>
    </svg>
  );
};

ArrowCircleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowCircleLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowCircleLeft;
