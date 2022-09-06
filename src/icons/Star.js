import React from 'react';
import PropTypes from 'prop-types';

const Star = props => {
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
        d="M10.103 3.53c.607-1.824 3.187-1.824 3.794 0l1.574 4.72h4.667c1.893 0 2.727 2.386 1.246 3.565l-3.82 3.04 1.546 4.773c.604 1.869-1.566 3.398-3.123 2.2L12 18.763l-3.947 3.036c-1.565 1.203-3.741-.345-3.117-2.218l1.5-4.499-3.954-3.294c-1.437-1.198-.59-3.537 1.28-3.537h4.767l1.574-4.72zM12 4.162l-1.573 4.72a2 2 0 01-1.898 1.368H3.762l3.954 3.295a2 2 0 01.617 2.169l-1.5 4.499 3.948-3.037a2 2 0 012.438 0l3.988 3.068-1.545-4.773a2 2 0 01.657-2.18l3.82-3.041H15.47a2 2 0 01-1.898-1.368L12 4.162z"
      ></path>
    </svg>
  );
};

Star.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Star.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Star;
