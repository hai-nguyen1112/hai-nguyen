import React from 'react';

import { ButtonPrimary, ButtonSecondary } from '../../UI/Button';
import cx from 'classnames';
import styles from './Project.module.scss';

const Project = ({ img, title, description }) => {
  return (
    <div className={styles.project}>
      <div className={cx(styles.side, styles.front)}>
        <img src={img} alt={title} className={styles.projectPicture}></img>
        <div className={styles.projectTitle}>{title}</div>
        <div className={styles.projectDetails}>
          <p>{description}</p>
        </div>
      </div>
      <div className={cx(styles.side, styles.back)}>
        <ButtonSecondary width="fluid">Get to know the project</ButtonSecondary>
      </div>
    </div>
  );
};

export default Project;
