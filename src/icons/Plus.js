import React from 'react';
import PropTypes from 'prop-types';

const Plus = props => {
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
        d="M13 6a1 1 0 10-2 0v5H6a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V6z"
      ></path>
    </svg>
  );
};

Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Plus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Plus;
