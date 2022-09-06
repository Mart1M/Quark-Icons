import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
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
        d="M2 5a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm0 7a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm1 6a1 1 0 100 2h18a1 1 0 100-2H3z"
      ></path>
    </svg>
  );
};

Menu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Menu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Menu;
