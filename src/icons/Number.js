import React from 'react';
import PropTypes from 'prop-types';

const Number = props => {
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
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M13.265 7.182V17h-2.076V9.152h-.057l-2.249 1.41V8.72l2.43-1.54h1.952z"></path>
    </svg>
  );
};

Number.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Number.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Number;
