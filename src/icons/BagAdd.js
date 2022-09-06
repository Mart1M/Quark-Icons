import React from 'react';
import PropTypes from 'prop-types';

const BagAdd = props => {
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
        d="M3.87 4.786A3 3 0 016.862 2h10.276a3 3 0 012.992 2.786l.656 9.184c.01.137-.165.2-.255.096a6.027 6.027 0 00-1.6-1.302.515.515 0 01-.265-.41l-.53-7.425A1 1 0 0017.137 4H17A5 5 0 017 4h-.138a1 1 0 00-.997.929l-.656 9.184a5.496 5.496 0 004.595 5.815.981.981 0 01.734.558c.136.299.296.584.476.854.18.268 0 .66-.323.66a7.496 7.496 0 01-7.477-8.03l.656-9.184zM12 7a3 3 0 01-3-3h6a3 3 0 01-3 3z"
      ></path>
      <path d="M17 14a1 1 0 10-2 0v3h-3a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3v-3z"></path>
    </svg>
  );
};

BagAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BagAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BagAdd;
