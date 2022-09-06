import React from 'react';
import PropTypes from 'prop-types';

const Cart = props => {
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
        d="M2 3a1 1 0 011-1h.221a3 3 0 012.973 2.597L6.25 5h11.976a3 3 0 012.846 3.949l-1.667 5A3 3 0 0116.558 16h-8.82l.018.134a1 1 0 00.991.866H17a1 1 0 110 2H8.747a3 3 0 01-2.972-2.597L4.212 4.866A1 1 0 003.222 4H3a1 1 0 01-1-1zm5.467 11h9.091a1 1 0 00.95-.684l1.666-5A1 1 0 0018.225 7H6.52l.947 7z"
      ></path>
      <path d="M17 20.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
      <path d="M9 20.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
    </svg>
  );
};

Cart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cart;
