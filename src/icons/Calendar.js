import React from 'react';
import PropTypes from 'prop-types';

const Calendar = props => {
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
        d="M8 4a1 1 0 00-2 0v2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3h-1V4a1 1 0 10-2 0v2H8V4zM6 8v2a1 1 0 102 0V8h8v2a1 1 0 102 0V8h1a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h1z"
      ></path>
    </svg>
  );
};

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Calendar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Calendar;
