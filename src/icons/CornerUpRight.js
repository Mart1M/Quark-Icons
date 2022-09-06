import React from 'react';
import PropTypes from 'prop-types';

const CornerUpRight = props => {
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
        d="M16.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L18.586 8H9a2 2 0 00-2 2v11a1 1 0 11-2 0V10a4 4 0 014-4h9.586l-2.293-2.293a1 1 0 010-1.414z"
      ></path>
    </svg>
  );
};

CornerUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerUpRight;
