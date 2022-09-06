import React from 'react';
import PropTypes from 'prop-types';

const CornerRightDown = props => {
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
        d="M21.707 16.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L16 18.586V9a2 2 0 00-2-2H3a1 1 0 010-2h11a4 4 0 014 4v9.586l2.293-2.293a1 1 0 011.414 0z"
      ></path>
    </svg>
  );
};

CornerRightDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerRightDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerRightDown;
