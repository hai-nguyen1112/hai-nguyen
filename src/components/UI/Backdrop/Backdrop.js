import React from 'react';

import styles from './Backdrop.module.scss';

const Backdrop = (props) => {
  return (
    <div
      className={styles.backdrop}
      onClick={props.clicked}
      style={{
        opacity: props.show ? '1' : '0',
        visibility: props.show ? 'visible' : 'hidden',
      }}
    ></div>
  );
};

export default Backdrop;
