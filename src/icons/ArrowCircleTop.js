import React from 'react';
import PropTypes from 'prop-types';

const ArrowCircleTop = props => {
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
      <path d="M15.707 10.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L11 10.414V16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
      ></path>
    </svg>
  );
};

ArrowCircleTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowCircleTop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowCircleTop;
