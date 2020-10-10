import React from 'react';

import Backdrop from '../Backdrop';
import styles from './Modal.module.scss';

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.onModalClose} />
      <div
        className={styles.modal}
        style={{
          transform: props.show
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0)',
          opacity: props.show ? '1' : '0',
          visibility: props.show ? 'visible' : 'hidden',
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
