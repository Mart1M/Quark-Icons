import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
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
        d="M17 4H7a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1zM7 2a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3H7z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 17a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

List.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

List.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default List;
