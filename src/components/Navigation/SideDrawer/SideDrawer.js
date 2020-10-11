import React from 'react';

import Backdrop from '../../UI/Backdrop';
import { ButtonSecondary } from '../../UI/Button';
import hai from '../../../img/haiavatar.jpg';
import styles from './SideDrawer.module.scss';

const SideDrawer = (props) => {
  let attachedClasses = [styles.sideDrawer, styles.closed];

  if (props.open) {
    attachedClasses = [styles.sideDrawer, styles.open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.onCloseSideDrawer} />
      <div className={attachedClasses.join(' ')}>
        <img alt="hai avatar" src={hai} className={styles.avatar} />
        <a href="!#">
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
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
