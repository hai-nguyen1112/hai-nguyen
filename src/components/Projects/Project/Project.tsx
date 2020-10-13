import React, { useState, useCallback, useEffect, useRef } from 'react';

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
  const imgRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const titleRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const descriptionRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const backRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const closeModalHandler = useCallback((): void => {
    setShowModal(false);
  }, [setShowModal]);

  const openModalHandler = useCallback((): void => {
    setShowModal(true);
  }, [setShowModal]);

  useEffect(() => {
    if (typeof window.orientation === 'undefined') {
      const height =
        (imgRef.current.getBoundingClientRect().width * 917) / 1678 +
        titleRef.current.getBoundingClientRect().height +
        descriptionRef.current.getBoundingClientRect().height;
      backRef.current.style.height = height + 'px';
    }
  }, [backRef, imgRef, titleRef, descriptionRef]);

  return (
    <div>
      <Modal show={showModal} onModalClose={closeModalHandler}>
        <ProjectDetail
          onModalClose={closeModalHandler}
          projectDetail={projectDetail}
          show={showModal}
        />
      </Modal>
      <div className={styles.project}>
        <div className={cx(styles.side, styles.front)}>
          <img
            ref={imgRef}
            src={img}
            alt={title}
            className={styles.projectPicture}
          />
          <div ref={titleRef} className={styles.projectTitle}>
            {title}
          </div>
          <div ref={descriptionRef} className={styles.projectDetails}>
            <p>{description}</p>
          </div>
        </div>
        <div ref={backRef} className={cx(styles.side, styles.back)}>
          <ButtonSecondary width="fluid" clicked={openModalHandler}>
            Get to know the project
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default Project;
