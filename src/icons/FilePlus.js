import React from 'react';
import PropTypes from 'prop-types';

const FilePlus = props => {
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
      <path d="M12 10a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2v-2a1 1 0 011-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V8a1 1 0 00-.293-.707l-5-5A1 1 0 0014 2H7zM6 5a1 1 0 011-1h6v4a1 1 0 001 1h4v10a1 1 0 01-1 1H7a1 1 0 01-1-1V5zm10.586 2L15 5.414V7h1.586z"
      ></path>
    </svg>
  );
};

FilePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilePlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilePlus;
