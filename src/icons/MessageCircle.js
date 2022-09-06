import React from 'react';
import PropTypes from 'prop-types';

const MessageCircle = props => {
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
        d="M12 4a8 8 0 00-6.832 12.164 1 1 0 01.103.813l-.779 2.556 2.639-.754a1 1 0 01.786.102A8 8 0 1012 4zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 01-4.722-1.183l-4.003 1.145a1 1 0 01-1.232-1.253l1.188-3.9A9.96 9.96 0 012 12z"
      ></path>
    </svg>
  );
};

MessageCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MessageCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MessageCircle;
