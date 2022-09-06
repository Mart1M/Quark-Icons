import React from 'react';
import PropTypes from 'prop-types';

const CornerLeftUp = props => {
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
        d="M2.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L8 5.414V15a2 2 0 002 2h11a1 1 0 110 2H10a4 4 0 01-4-4V5.414L3.707 7.707a1 1 0 01-1.414 0z"
      ></path>
    </svg>
  );
};

CornerLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerLeftUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerLeftUp;
