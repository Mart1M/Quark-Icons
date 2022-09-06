import React from 'react';
import PropTypes from 'prop-types';

const Code = props => {
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
      <path d="M14.293 17.293a1 1 0 001.414 1.414l6-6a1 1 0 000-1.414l-6-6a1 1 0 10-1.414 1.414L19.586 12l-5.293 5.293z"></path>
      <path d="M9.707 6.707a1 1 0 00-1.414-1.414l-6 6a1 1 0 000 1.414l6 6a1 1 0 001.414-1.414L4.414 12l5.293-5.293z"></path>
    </svg>
  );
};

Code.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Code.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Code;
