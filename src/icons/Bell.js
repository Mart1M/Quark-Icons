import React from 'react';
import PropTypes from 'prop-types';

const Bell = props => {
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
        d="M12 2C8.661 2 6.83 3.424 5.893 4.986A6.435 6.435 0 005 7.966v5.672L2.732 16.36A1 1 0 003.5 18h3.6a5.002 5.002 0 009.8 0h3.6a1 1 0 00.768-1.64L19 13.638V7.967l-.002-.063a6.14 6.14 0 00-.11-.881 6.435 6.435 0 00-.78-2.037C17.17 3.423 15.338 2 12 2zm2.83 16H9.17a3.001 3.001 0 005.66 0zM7 7.984V14a1 1 0 01-.232.64L5.635 16h12.73l-1.133-1.36A1 1 0 0117 14V7.984l-.008-.113a4.435 4.435 0 00-.6-1.856C15.83 5.075 14.662 4 12 4 9.339 4 8.17 5.076 7.608 6.014A4.435 4.435 0 007 7.984z"
      ></path>
    </svg>
  );
};

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bell.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bell;
