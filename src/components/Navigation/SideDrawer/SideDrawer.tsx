import React, { useRef } from 'react';

import Backdrop from '../../UI/Backdrop';
import { ButtonSecondary } from '../../UI/Button';
import hai from '../../../img/haiavatar.jpg';
import styles from './SideDrawer.module.scss';

type SideDrawerProps = {
  open: boolean;
  onCloseSideDrawer: () => void;
};

const SideDrawer = (props: SideDrawerProps): JSX.Element => {
  const sideDrawerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  let attachedClasses: string[] = [styles.sideDrawer, styles.closed];

  if (props.open) {
    attachedClasses = [styles.sideDrawer, styles.open];
    sideDrawerRef.current.scrollTo(0, 0);
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.onCloseSideDrawer} />
      <div ref={sideDrawerRef} className={attachedClasses.join(' ')}>
        <img alt="hai avatar" src={hai} className={styles.avatar} />
        <a href="#welcome">
          <ButtonSecondary width="fluid" clicked={props.onCloseSideDrawer}>
            Back to top
          </ButtonSecondary>
        </a>
        <div></div>
        <a href="#projects">
          <ButtonSecondary width="fluid" clicked={props.onCloseSideDrawer}>
            My projects
          </ButtonSecondary>
        </a>
        <div></div>
        <a href="#about">
          <ButtonSecondary width="fluid" clicked={props.onCloseSideDrawer}>
            About me
          </ButtonSecondary>
        </a>
        <div></div>
        <a href="#skills">
          <ButtonSecondary width="fluid" clicked={props.onCloseSideDrawer}>
            My skills
          </ButtonSecondary>
        </a>
        <div></div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
