import React from 'react';
import PropTypes from 'prop-types';

const Lock = props => {
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
        d="M12 5a4 4 0 00-4 4h8a4 4 0 00-4-4zm10 8a4 4 0 00-4-4A6 6 0 006 9a4 4 0 00-4 4v5a4 4 0 004 4h12a4 4 0 004-4v-5zM6 11a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2v-5a2 2 0 00-2-2H6zm7 3a1 1 0 10-2 0v3a1 1 0 102 0v-3z"
      ></path>
    </svg>
  );
};

Lock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Lock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Lock;
