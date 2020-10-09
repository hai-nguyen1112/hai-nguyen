import React from 'react';

import styles from './ButtonPrimary.module.scss';
import cx from 'classnames';

export const ButtonPrimary = (props) => {
  return (
    <a
      href={props.path}
      className={cx(
        styles.btn,
        styles[props.color],
        styles[props.shape],
        styles[props.width]
      )}
    >
      {props.children}
    </a>
  );
};
