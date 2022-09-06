import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
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
        d="M9 7a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10zM6 21a6 6 0 0112 0 1 1 0 102 0 8 8 0 10-16 0 1 1 0 102 0z"
      ></path>
    </svg>
  );
};

User.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

User.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default User;
