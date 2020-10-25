import React from 'react';
import { connect } from 'react-redux';

import Skill from './Skill';
import styles from './Skills.module.scss';
import { StoreState } from '../../redux/reducers/rootReducer';

type SkillsProps = {
  skills: { img: string; title: string; description: string; id: string }[];
};

const Skills = (props: SkillsProps): JSX.Element => {
  const { skills } = props;

  let skillsList: JSX.Element[] = [];
  if (skills && skills.length > 0) {
    skillsList = skills.map(
      (
        skill: { img: string; title: string; description: string; id: string },
        index: number
      ): JSX.Element => (
        <Skill
          key={skill.id + index}
          img={skill.img}
          title={skill.title}
          description={skill.description}
        />
      )
    );
  }

  return (
    <div id="skills" className={styles.container}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>My skills</h2>
      </div>
      <div className={styles.cards}>{skillsList}</div>
      <div className={styles.otherSkills}>
        <div>Other skills</div>
        <div>Server-Side Rendering</div>
        <div>HTML5</div>
        <div>RESTful APIs</div>
        <div>Postman</div>
        <div>Agile/Scrum</div>
        <div>Semantic UI</div>
        <div>Material UI</div>
        <div>Jira</div>
        <div>Git</div>
        <div>Bitbucket</div>
        <div>Ruby on Rails</div>
        <div>SQL</div>
        <div>PostgreSQL</div>
        <div>NoSQL</div>
      </div>
    </div>
  );
};

const mapStateToProps = (
  state: StoreState
): {
  skills: { img: string; title: string; description: string; id: string }[];
} => {
  return {
    skills: state.user.user.skills,
  };
};

export default connect(mapStateToProps)(Skills);
