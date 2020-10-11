import React from 'react';

import styles from './ButtonSecondary.module.scss';
import cx from 'classnames';

type ButtonSecondaryProps = {
  shape?: string;
  width?: string;
  color?: string;
  clicked?: () => void;
  children: JSX.Element | string;
};

export const ButtonSecondary = (props: ButtonSecondaryProps): JSX.Element => {
  let attachedClassNames: string;
  attachedClassNames = cx(styles.btn);
  if (props.shape) {
    attachedClassNames = cx(attachedClassNames, styles[props.shape]);
  }
  if (props.width) {
    attachedClassNames = cx(attachedClassNames, styles[props.width]);
  }
  if (props.color) {
    attachedClassNames = cx(attachedClassNames, styles[props.color]);
  }

  return (
    <button className={attachedClassNames} onClick={props.clicked}>
      {props.children}
    </button>
  );
};
