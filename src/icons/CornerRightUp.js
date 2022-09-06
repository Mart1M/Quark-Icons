import React from 'react';
import PropTypes from 'prop-types';

const CornerRightUp = props => {
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
        d="M21.707 7.707a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L16 5.414V15a2 2 0 01-2 2H3a1 1 0 100 2h11a4 4 0 004-4V5.414l2.293 2.293a1 1 0 001.414 0z"
      ></path>
    </svg>
  );
};

CornerRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerRightUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerRightUp;
