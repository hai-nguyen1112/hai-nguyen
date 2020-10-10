import React from 'react';

import styles from './ButtonSecondary.module.scss';
import cx from 'classnames';

export const ButtonSecondary = (props) => {
  return (
    <button
      className={cx(
        styles.btn,
        styles[props.shape],
        styles[props.width],
        styles[props.color]
      )}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};
