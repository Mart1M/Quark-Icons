import React from 'react';
import PropTypes from 'prop-types';

const Share = props => {
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
        d="M3 11a1 1 0 011 1v5a1 1 0 001 1h14a1 1 0 001-1v-5a1 1 0 112 0v5a3 3 0 01-3 3H5a3 3 0 01-3-3v-5a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.707 9.707a1 1 0 01-1.414 0L13 8.414V14a1 1 0 11-2 0V8.414L9.707 9.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"
      ></path>
    </svg>
  );
};

Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Share.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Share;
