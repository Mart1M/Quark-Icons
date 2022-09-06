import React from 'react';
import PropTypes from 'prop-types';

const Forks = props => {
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
        d="M5 2a1 1 0 011 1v2.343a3 3 0 00.879 2.121L7 7.586V3a1 1 0 012 0v4.586l.121-.122A3 3 0 0010 5.344V3a1 1 0 112 0v2.343a5 5 0 01-1.464 3.536L9 10.414V21a1 1 0 11-2 0V10.414L5.464 8.88A5 5 0 014 5.343V3a1 1 0 011-1zm13 2.526c-1.219.832-2.738 2.717-2.97 6.474H18V4.526zM18 13v8a1 1 0 102 0V4.22c0-.62-.287-1.2-.773-1.553a1.7 1.7 0 00-1.844-.107c-1.93 1.065-4.076 3.606-4.353 8.38-.067 1.162.88 2.06 1.97 2.06h3z"
      ></path>
    </svg>
  );
};

Forks.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Forks.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Forks;
