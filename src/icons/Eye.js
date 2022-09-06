import React from 'react';
import PropTypes from 'prop-types';

const Eye = props => {
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
        d="M12 14a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 100-8 4 4 0 000 8z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.844 8.272C6.507 6.706 8.994 5 12 5c3.006 0 5.493 1.706 7.156 3.272a18.707 18.707 0 012.497 2.904 10.408 10.408 0 01.179.269l.01.017.004.005.001.002s.001.001-.847.531c.864.504.863.505.863.505l-.001.002-.003.006-.011.018a7.293 7.293 0 01-.17.271 17.218 17.218 0 01-2.423 2.92C17.609 17.301 15.123 19 12 19c-3.122 0-5.61-1.699-7.255-3.279a17.224 17.224 0 01-2.423-2.919 10.338 10.338 0 01-.17-.271l-.01-.018-.004-.006v-.002S2.135 12.504 3 12l-.848-.53.002-.003.003-.005.011-.017a6.023 6.023 0 01.179-.269 18.706 18.706 0 012.497-2.904zM3 12l-.848-.53a1.001 1.001 0 00-.016 1.034L3 12zm1.203.015a15.23 15.23 0 001.927 2.263C7.61 15.699 9.622 17 12 17s4.39-1.301 5.87-2.721a15.235 15.235 0 001.927-2.264 16.717 16.717 0 00-2.012-2.287C16.26 8.294 14.248 7 12 7S7.739 8.294 6.215 9.728a16.708 16.708 0 00-2.012 2.287zM21 12l.863.505c.188-.321.182-.72-.015-1.035L21 12z"
      ></path>
    </svg>
  );
};

Eye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Eye.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Eye;
