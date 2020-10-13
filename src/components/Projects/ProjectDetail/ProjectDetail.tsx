import React, { useRef } from 'react';

import githubLogo from '../../../img/github.png';
import webLogo from '../../../img/web.png';
import styles from './ProjectDetail.module.scss';

interface ProjectDetailProps {
  show: boolean;
  onModalClose: () => void;
  projectDetail: {
    title: string;
    subTitle: string;
    details: string[];
    gitRepoLink: string;
    demoLink: string;
    note: string;
  };
}

const ProjectDetail = ({
  onModalClose,
  projectDetail,
  show,
}: ProjectDetailProps): JSX.Element => {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  if (show) {
    modalRef.current.scrollTo(0, 0);
  }

  return (
    <div ref={modalRef} className={styles.container}>
      <button className={styles.closeButton} onClick={onModalClose}>
        &times;
      </button>
      <h3 className={styles.projectTitle}>{projectDetail.title}</h3>
      <h4 className={styles.projectSubtitle}>{projectDetail.subTitle}</h4>
      <ul>
        <li>
          {projectDetail.details.map((detail, index) => (
            <span key={detail + index}>
              &ndash; &nbsp;
              {detail}
            </span>
          ))}
        </li>
        <li>
          <div>
            <img src={githubLogo} alt="logo" />
            {projectDetail.gitRepoLink.length !== 0 ? (
              <a
                href={projectDetail.gitRepoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Git repo
              </a>
            ) : (
              <span>This repo is confidential.</span>
            )}
          </div>
          <div>
            <img src={webLogo} alt="logo" />
            {projectDetail.demoLink.length !== 0 ? (
              <a
                href={projectDetail.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to demo page
              </a>
            ) : (
              <span>The demo page is unavailable.</span>
            )}
          </div>
          {projectDetail.note.length !== 0 ? (
            <div>{projectDetail.note}</div>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default ProjectDetail;
