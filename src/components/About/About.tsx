import React from 'react';
import { useSelector } from 'react-redux';

import styles from './About.module.scss';
import cx from 'classnames';
import { StoreState } from '../../redux/reducers/rootReducer';
import { User } from '../../redux/actions/userActions';
import haiavatar from '../../img/haiavatar.jpg';

const About = (): JSX.Element => {
  const user: User = useSelector((state: StoreState) => state.user.user);
  const { name, intro, education, employmentHistory } = user;

  let educationDetails: JSX.Element[] = [];
  if (education && education.length > 0) {
    educationDetails = education.map(
      (e: string[], index: number): JSX.Element => {
        return (
          <li key={e[0] + e[1] + index}>
            <span>{e[0]}</span>
            <span>{e[1]}</span>
          </li>
        );
      }
    );
  }

  let employmentDetails: JSX.Element[] = [];
  if (employmentHistory && employmentHistory.length > 0) {
    employmentDetails = employmentHistory.map(
      (e: string[], index: number): JSX.Element => {
        return (
          <li key={e[0] + index}>
            {e.map((content: string, i: number) => {
              if (!content.startsWith('+')) {
                return (
                  <span
                    key={content + i}
                    style={{ textDecoration: 'underline' }}
                  >
                    {content}
                  </span>
                );
              }
              return <span key={content + i}>&nbsp;&nbsp;&nbsp;{content}</span>;
            })}
          </li>
        );
      }
    );
  }

  return (
    <div id="about" className={cx(styles.about, 'mt-sm')}>
      <div className={styles.aboutBox}>
        <div className={styles.aboutMe}>
          <img src={haiavatar} alt="avatar" className={styles.avatar} />
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.intro}>{intro}</p>
        </div>
      </div>
      <div className={styles.education}>
        <h4 className={styles.categoryTitle}>Education</h4>
        <ul>{educationDetails}</ul>
      </div>
      <div className={styles.workExperience}>
        <h4 className={styles.categoryTitle}>Work Experience</h4>
        <ul>{employmentDetails}</ul>
      </div>
    </div>
  );
};

export default About;
