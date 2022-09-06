import React from 'react';
import PropTypes from 'prop-types';

const Truck = props => {
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
        d="M5 2a3 3 0 00-3 3v10c0 1.062.552 1.996 1.385 2.529A3 3 0 108.829 18H13c.058 0 .115-.002.172-.005A3 3 0 1018.83 18h.069a3 3 0 002.996-3.15l-.3-6A3 3 0 0018.597 6H16V5a3 3 0 00-3-3H5zm11 6v8h2.898a1 1 0 00.998-1.05l-.3-6a1 1 0 00-.998-.95H16zm-2-2V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6zm2 12a1 1 0 100 2 1 1 0 000-2zM6 18a1 1 0 100 2 1 1 0 000-2z"
      ></path>
    </svg>
  );
};

Truck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Truck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Truck;
