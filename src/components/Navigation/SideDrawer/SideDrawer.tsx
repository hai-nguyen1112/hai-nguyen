import React, { useEffect, useRef } from 'react';

import Backdrop from '../../UI/Backdrop';
import { ButtonSecondary } from '../../UI/Button';
import hai from '../../../img/haiavatar.jpg';
import styles from './SideDrawer.module.scss';

type SideDrawerProps = {
  open: boolean;
  onCloseSideDrawer: () => void;
};

const SideDrawer = (props: SideDrawerProps): JSX.Element => {
  const { open, onCloseSideDrawer } = props;
  const sideDrawerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  let attachedClasses: string[] = [styles.sideDrawer, styles.closed];

  if (open) {
    attachedClasses = [styles.sideDrawer, styles.open];
    sideDrawerRef.current.scrollTo(0, 0);
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [open]);

  return (
    <React.Fragment>
      <Backdrop show={open} clicked={onCloseSideDrawer} />
      <div ref={sideDrawerRef} className={attachedClasses.join(' ')}>
        <img alt="hai avatar" src={hai} className={styles.avatar} />
        <a href="#welcome">
          <ButtonSecondary width="fluid" clicked={onCloseSideDrawer}>
            Back to top
          </ButtonSecondary>
        </a>
        <div></div>
        <a href="#projects">
          <ButtonSecondary width="fluid" clicked={onCloseSideDrawer}>
            My projects
          </ButtonSecondary>
        </a>
        <div></div>
        <a href="#about">
          <ButtonSecondary width="fluid" clicked={onCloseSideDrawer}>
            About me
          </ButtonSecondary>
        </a>
        <div></div>
        <a href="#skills">
          <ButtonSecondary width="fluid" clicked={onCloseSideDrawer}>
            My skills
          </ButtonSecondary>
        </a>
        <div></div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
