import React from 'react';
import PropTypes from 'prop-types';

const CornerUpLeft = props => {
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
        d="M7.707 2.293a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L5.414 8H15a2 2 0 012 2v11a1 1 0 102 0V10a4 4 0 00-4-4H5.414l2.293-2.293a1 1 0 000-1.414z"
      ></path>
    </svg>
  );
};

CornerUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerUpLeft;
