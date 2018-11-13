import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './index.module.sass';

const TextEllipsis = ({ text, customClass }) => (
  <div className={classnames(styles.text, customClass)}>{text}</div>
);

TextEllipsis.propTypes = {
  text: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default TextEllipsis;
