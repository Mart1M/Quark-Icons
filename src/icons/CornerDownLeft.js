import React from 'react';
import PropTypes from 'prop-types';

const CornerDownLeft = props => {
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
        d="M7.707 21.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 16H15a2 2 0 002-2V3a1 1 0 112 0v11a4 4 0 01-4 4H5.414l2.293 2.293a1 1 0 010 1.414z"
      ></path>
    </svg>
  );
};

CornerDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerDownLeft;
