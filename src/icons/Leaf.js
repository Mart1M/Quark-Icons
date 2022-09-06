import React from 'react';
import PropTypes from 'prop-types';

const Leaf = props => {
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
        d="M4.605 17.804c-1.992-3.887-1.502-7.857 1.228-10.79 2.84-3.05 7.913-4.774 14.483-4.387.57.033 1.024.488 1.057 1.057.386 6.57-1.337 11.643-4.388 14.483-2.932 2.73-6.902 3.22-10.79 1.228l-1.65 1.65a1.125 1.125 0 01-1.59-1.59l1.65-1.65zm1.69-1.69l7.91-7.91a1.125 1.125 0 011.59 1.591l-7.909 7.91c2.88 1.222 5.557.686 7.566-1.185 2.254-2.098 3.852-6.051 3.717-11.69-5.638-.134-9.591 1.464-11.69 3.718-1.87 2.009-2.406 4.685-1.184 7.566z"
      ></path>
    </svg>
  );
};

Leaf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Leaf.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Leaf;
