import React from 'react';
import PropTypes from 'prop-types';

const ClickAndCollect = props => {
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
        d="M9 4a3 3 0 106 0h2A5 5 0 017 4h2z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.862 2A3 3 0 003.87 4.786l-.656 9.184A7.496 7.496 0 0010.69 22h2.618c1.175 0 2.32-.276 3.352-.791l-.79-1.843A5.496 5.496 0 0113.31 20h-2.618a5.496 5.496 0 01-5.482-5.887l.656-9.184A1 1 0 016.862 4h10.276a1 1 0 01.997.929l.656 9.184a5.496 5.496 0 01-.39 2.459l1.885.673a7.493 7.493 0 00.5-3.275l-.656-9.184A3 3 0 0017.138 2H6.862z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.271 14.315a1 1 0 011.065-.257l7 2.5a1 1 0 01.411 1.606l-1.34 1.508 1.762 1.585a1 1 0 11-1.338 1.486l-1.752-1.577-1.332 1.498a1 1 0 01-1.666-.27l-3-7a1 1 0 01.19-1.079zm2.55 2.397L17.3 20.16l1.969-2.216-3.446-1.23z"
      ></path>
    </svg>
  );
};

ClickAndCollect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClickAndCollect.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ClickAndCollect;
