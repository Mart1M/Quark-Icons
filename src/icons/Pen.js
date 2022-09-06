import React from 'react';
import PropTypes from 'prop-types';

const Pen = props => {
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
      <path d="M2.445 18.688L3.832 17.3l2.907 2.906-1.388 1.387-2.906-2.906z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.793 2.793a3.121 3.121 0 114.414 4.414l-14.5 14.5A1 1 0 016 22H3a1 1 0 01-1-1v-3a1 1 0 01.293-.707l14.5-14.5zm3 1.414a1.121 1.121 0 00-1.586 0L4 18.414V20h1.586L19.793 5.793a1.121 1.121 0 000-1.586z"
      ></path>
    </svg>
  );
};

Pen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Pen;
