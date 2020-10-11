import React from 'react';

import styles from './ButtonPrimary.module.scss';
import cx from 'classnames';

type ButtonPrimaryProps = {
  path: string;
  color?: string;
  shape?: string;
  width?: string;
  children: JSX.Element | string;
};

export const ButtonPrimary = (props: ButtonPrimaryProps): JSX.Element => {
  let attachedClassNames: string;
  attachedClassNames = cx(styles.btn);
  if (props.color) {
    attachedClassNames = cx(attachedClassNames, styles[props.color]);
  }
  if (props.shape) {
    attachedClassNames = cx(attachedClassNames, styles[props.shape]);
  }
  if (props.width) {
    attachedClassNames = cx(attachedClassNames, styles[props.width]);
  }

  return (
    <a href={props.path} className={attachedClassNames}>
      {props.children}
    </a>
  );
};
