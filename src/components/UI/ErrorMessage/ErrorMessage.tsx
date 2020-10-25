import React from 'react';

import styles from './ErrorMessage.module.scss';

const ErrorMessage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.errorBox}>
        <h4 className={styles.heading}>Error</h4>
        <p className={styles.text}>
          Something went wrong! Please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
