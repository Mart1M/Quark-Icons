import React from 'react';
import PropTypes from 'prop-types';

const MagnifyingGlass = props => {
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
        d="M4.125 10.875a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0zm6.75-9a9 9 0 105.519 16.11l3.81 3.81a1.125 1.125 0 001.591-1.59l-3.81-3.811a9 9 0 00-7.11-14.519z"
      ></path>
    </svg>
  );
};

MagnifyingGlass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MagnifyingGlass.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MagnifyingGlass;
