import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import Backdrop from '../../UI/Backdrop';
import { ButtonSecondary } from '../../UI/Button';
import styles from './SideDrawer.module.scss';
import { StoreState } from '../../../redux/reducers/rootReducer';
import { apiUrl } from '../../../utils';

type SideDrawerProps = {
  open: boolean;
  onCloseSideDrawer: () => void;
  photo: string;
};

const SideDrawer = (props: SideDrawerProps): JSX.Element => {
  const { open, onCloseSideDrawer, photo } = props;
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
        <img
          alt="hai avatar"
          src={`${apiUrl}/img/${photo}`}
          className={styles.avatar}
        />
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

const mapStateToProps = (state: StoreState): { photo: string } => {
  return {
    photo: state.user.user.photo,
  };
};

export default connect(mapStateToProps)(SideDrawer);
