import React from 'react';

import styles from './Backdrop.module.scss';

interface BackdropProps {
  show: boolean;
  clicked: () => void;
}

const Backdrop = (props: BackdropProps): JSX.Element => {
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
