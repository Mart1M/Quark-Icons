import React from 'react';
import PropTypes from 'prop-types';

const Mail = props => {
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
        d="M5 7a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1V8a1 1 0 00-1-1H5zM2 8a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V8z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.106 6.553a1 1 0 011.341-.447l7.106 3.552a1 1 0 00.894 0l7.106-3.552a1 1 0 11.894 1.788l-7.105 3.553a3 3 0 01-2.684 0L3.553 7.894a1 1 0 01-.447-1.341z"
      ></path>
    </svg>
  );
};

Mail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Mail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Mail;
