import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => {
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
        d="M10 4a2 2 0 00-2 2v1H7a5 5 0 00-5 5v5a5 5 0 005 5h10a5 5 0 005-5v-5a5 5 0 00-5-5h-1V6a2 2 0 00-2-2h-4zm4 3V6h-4v1h4zm-4 2H7a3 3 0 00-3 3v5a3 3 0 003 3h10a3 3 0 003-3v-5a3 3 0 00-3-3h-7zm2 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 2a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
      ></path>
    </svg>
  );
};

Photo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Photo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Photo;
