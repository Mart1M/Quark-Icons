import React from 'react';
import PropTypes from 'prop-types';

const Home = props => {
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
        d="M11.336 4.928a1 1 0 011.328 0l7 6.223a1 1 0 01.336.747V19a1 1 0 01-1 1h-3v-3a4 4 0 00-8 0v3H5a1 1 0 01-1-1v-7.102a1 1 0 01.336-.747l7-6.223zM10 20h4v-3a2 2 0 10-4 0v3zm3.993-16.566a3 3 0 00-3.986 0l-7 6.222A3 3 0 002 11.898V19a3 3 0 003 3h14a3 3 0 003-3v-7.102a3 3 0 00-1.007-2.242l-7-6.222z"
      ></path>
    </svg>
  );
};

Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Home.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Home;
