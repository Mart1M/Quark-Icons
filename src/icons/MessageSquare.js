import React from 'react';
import PropTypes from 'prop-types';

const MessageSquare = props => {
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
        d="M2 5a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3h-6.5a1 1 0 00-.8.4l-2.1 2.8C8.447 22.738 6 21.922 6 20v-2H5a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v10a1 1 0 001 1h1a2 2 0 012 2v2l2.1-2.8a3 3 0 012.4-1.2H19a1 1 0 001-1V5a1 1 0 00-1-1H5z"
      ></path>
    </svg>
  );
};

MessageSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MessageSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MessageSquare;
