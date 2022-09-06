import React from 'react';
import PropTypes from 'prop-types';

const Bag = props => {
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
        d="M3.87 4.786A3 3 0 016.862 2h10.276a3 3 0 012.992 2.786l.656 9.184A7.496 7.496 0 0113.31 22h-2.618a7.496 7.496 0 01-7.477-8.03l.656-9.184zM6.862 4a1 1 0 00-.997.929l-.656 9.184A5.496 5.496 0 0010.69 20h2.618a5.496 5.496 0 005.482-5.887l-.656-9.184A1 1 0 0017.138 4H6.862z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4a3 3 0 106 0h2A5 5 0 017 4h2z"
      ></path>
    </svg>
  );
};

Bag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bag;
