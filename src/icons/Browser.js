import React from 'react';
import PropTypes from 'prop-types';

const Browser = props => {
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
        d="M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm16-2a2 2 0 012 2v2H4V6a2 2 0 012-2h12zm2 14v-8H4v8a2 2 0 002 2h12a2 2 0 002-2zM6 7a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2z"
      ></path>
    </svg>
  );
};

Browser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Browser.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Browser;
