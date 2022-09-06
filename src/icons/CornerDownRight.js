import React from 'react';
import PropTypes from 'prop-types';

const CornerDownRight = props => {
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
        d="M16.293 21.707a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L18.586 16H9a2 2 0 01-2-2V3a1 1 0 00-2 0v11a4 4 0 004 4h9.586l-2.293 2.293a1 1 0 000 1.414z"
      ></path>
    </svg>
  );
};

CornerDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerDownRight;
