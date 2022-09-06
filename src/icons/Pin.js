import React from 'react';
import PropTypes from 'prop-types';

const Pin = props => {
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
      <path d="M12 2a8 8 0 00-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 001.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0012 2zm0 17.65c-1.67-1.59-6-6-6-9.73a6 6 0 1112 0c0 3.7-4.33 8.14-6 9.73z"></path>
      <path d="M12 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
    </svg>
  );
};

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Pin;
