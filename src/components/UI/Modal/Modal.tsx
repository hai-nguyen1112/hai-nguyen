import React, { useEffect } from 'react';

import Backdrop from '../Backdrop';
import styles from './Modal.module.scss';

type ModalProps = {
  show: boolean;
  onModalClose: () => void;
  children: JSX.Element;
};

const Modal = (props: ModalProps): JSX.Element => {
  const { show, onModalClose } = props;

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [show]);

  return (
    <React.Fragment>
      <Backdrop show={show} clicked={onModalClose} />
      <div
        className={styles.modal}
        style={{
          transform: show
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0)',
          opacity: show ? '1' : '0',
          visibility: show ? 'visible' : 'hidden',
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
