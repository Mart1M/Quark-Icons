import React from 'react';
import PropTypes from 'prop-types';

const Cpu = props => {
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
        d="M10 8a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4zm0 2h4v4h-4v-4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3a1 1 0 10-2 0v1h-4V3a1 1 0 00-2 0v1a4 4 0 00-4 4H3a1 1 0 000 2h1v4H3a1 1 0 100 2h1a4 4 0 004 4v1a1 1 0 102 0v-1h4v1a1 1 0 102 0v-1a4 4 0 004-4h1a1 1 0 100-2h-1v-4h1a1 1 0 100-2h-1a4 4 0 00-4-4V3zM6 16V8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2z"
      ></path>
    </svg>
  );
};

Cpu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cpu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cpu;
