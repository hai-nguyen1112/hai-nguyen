import React from 'react';

import styles from './Skill.module.scss';
import { apiUrl } from '../../../utils';

interface SkillProps {
  img: string;
  title: string;
  description: string;
}

const Skill = (props: SkillProps): JSX.Element => {
  return (
    <div className={styles.skill}>
      <img
        src={`${apiUrl}/img/${props.img}`}
        className={styles.logo}
        alt="logo"
      />
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default Skill;
