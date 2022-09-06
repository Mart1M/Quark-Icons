import React from 'react';
import PropTypes from 'prop-types';

const Send = props => {
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
        d="M5 10a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1v-8a1 1 0 00-1-1h-4a1 1 0 110-2h4a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3v-8a3 3 0 013-3h4a1 1 0 010 2H5z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.106 9.553a1 1 0 011.341-.447l7.106 3.552a1 1 0 00.894 0l7.106-3.552a1 1 0 11.894 1.788l-7.105 3.553a3 3 0 01-2.684 0l-7.105-3.553a1 1 0 01-.447-1.341z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.707 6.707a1 1 0 01-1.414 0L13 5.414V11a1 1 0 11-2 0V5.414L9.707 6.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"
      ></path>
    </svg>
  );
};

Send.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Send.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Send;
