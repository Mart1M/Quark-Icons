import React from 'react';
import PropTypes from 'prop-types';

const CornerLeftDown = props => {
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
        d="M2.293 16.293a1 1 0 000 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L8 18.586V9a2 2 0 012-2h11a1 1 0 100-2H10a4 4 0 00-4 4v9.586l-2.293-2.293a1 1 0 00-1.414 0z"
      ></path>
    </svg>
  );
};

CornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerLeftDown;
