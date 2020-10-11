import React, { useState, useCallback } from 'react';

import Modal from '../../UI/Modal';
import ProjectDetail from '../ProjectDetail';
import { ButtonSecondary } from '../../UI/Button';
import cx from 'classnames';
import styles from './Project.module.scss';

type ProjectProps = {
  img: string;
  title: string;
  description: string;
  projectDetail: {
    title: string;
    subTitle: string;
    details: string[];
    gitRepoLink: string;
    demoLink: string;
    note: string;
  };
};

const Project = ({
  img,
  title,
  description,
  projectDetail,
}: ProjectProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = useCallback((): void => {
    setShowModal(false);
  }, [setShowModal]);

  const openModalHandler = useCallback((): void => {
    setShowModal(true);
  }, [setShowModal]);

  return (
    <React.Fragment>
      <Modal show={showModal} onModalClose={closeModalHandler}>
        <ProjectDetail
          onModalClose={closeModalHandler}
          projectDetail={projectDetail}
        />
      </Modal>
      <div className={styles.project}>
        <div className={cx(styles.side, styles.front)}>
          <img src={img} alt={title} className={styles.projectPicture}></img>
          <div className={styles.projectTitle}>{title}</div>
          <div className={styles.projectDetails}>
            <p>{description}</p>
          </div>
        </div>
        <div className={cx(styles.side, styles.back)}>
          <ButtonSecondary width="fluid" clicked={openModalHandler}>
            Get to know the project
          </ButtonSecondary>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
