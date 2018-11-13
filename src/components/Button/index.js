import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './index.module.sass';

const Button = ({ onClick, children, customClass }) => (
  <div
    role="button"
    tabIndex="0"
    className={classnames(styles.button, customClass)}
    onClick={onClick}
  >
    {children}
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  customClass: PropTypes.string,
};

export default Button;
