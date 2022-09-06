import React from 'react';
import PropTypes from 'prop-types';

const File = props => {
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
      <path d="M14 3l.707-.707A1 1 0 0014 2v1zm5 5h1a1 1 0 00-.293-.707L19 8zm-5 0h-1a1 1 0 001 1V8zm3 12H7v2h10v-2zM6 19V5H4v14h2zM7 4h7V2H7v2zm11 4v11h2V8h-2zm1-1h-5v2h5V7zm-4 1V3h-2v5h2zm-1.707-4.293l5 5 1.414-1.414-5-5-1.414 1.414zM7 20a1 1 0 01-1-1H4a3 3 0 003 3v-2zm10 2a3 3 0 003-3h-2a1 1 0 01-1 1v2zM6 5a1 1 0 011-1V2a3 3 0 00-3 3h2z"></path>
    </svg>
  );
};

File.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

File.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default File;
