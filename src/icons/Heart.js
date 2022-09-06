import React from 'react';
import PropTypes from 'prop-types';

const Heart = props => {
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
      <path d="M12 22a.952.952 0 01-.384-.079.998.998 0 01-.326-.228l-7.769-8.238A5.742 5.742 0 012 9.537c0-1.467.547-2.875 1.521-3.917C4.503 4.582 5.834 4 7.221 4s2.717.582 3.7 1.62L12 6.763l1.08-1.143C14.062 4.582 15.392 4 16.78 4c1.386 0 2.717.582 3.699 1.62A5.743 5.743 0 0122 9.537a5.742 5.742 0 01-1.521 3.918l-7.77 8.238a.998.998 0 01-.325.228A.952.952 0 0112 22zM7.22 6.117a3.045 3.045 0 00-1.233.256c-.392.17-.747.422-1.046.74a3.537 3.537 0 00-.943 2.419c0 .907.34 1.777.943 2.42L12 19.438l7.06-7.486a3.537 3.537 0 00.942-2.42c0-.907-.34-1.777-.943-2.42a3.223 3.223 0 00-2.28-.96c-.847 0-1.663.344-2.28.96l-1.79 1.906a.998.998 0 01-.325.232.951.951 0 01-.768 0 .998.998 0 01-.326-.232L9.5 7.113a3.194 3.194 0 00-1.045-.74 3.045 3.045 0 00-1.234-.256z"></path>
    </svg>
  );
};

Heart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Heart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Heart;
