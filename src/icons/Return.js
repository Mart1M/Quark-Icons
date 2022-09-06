import React from 'react';
import PropTypes from 'prop-types';

const Return = props => {
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
        d="M9 4.434L4.185 12 9 19.566 7.313 20.64 1.815 12l5.498-8.64C8.387 1.672 11 2.433 11 4.434V6h5a6 6 0 016 6v9a1 1 0 11-2 0c0-1.299-.487-1.994-1.032-2.396C18.375 18.166 17.604 18 17 18h-6v1.566c0 2-2.613 2.762-3.687 1.074L9 19.566V16h8c.852 0 2.003.211 3 .885V12a4 4 0 00-4-4H9V4.434z"
      ></path>
    </svg>
  );
};

Return.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Return.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Return;
