import React from 'react';
import { connect } from 'react-redux';

import Skill from './Skill';
import styles from './Skills.module.scss';
import { StoreState } from '../../redux/reducers/rootReducer';
import javascriptLogo from '../../img/javascript.jpg';
import enzymeLogo from '../../img/enzyme.png';
import expressLogo from '../../img/express.png';
import mongodbLogo from '../../img/mongodb.png';
import mongooseLogo from '../../img/mongoose.png';
import nodejsLogo from '../../img/nodejs.png';
import reactLogo from '../../img/react.png';
import reduxLogo from '../../img/redux.png';
import sassLogo from '../../img/sass.png';
import typescriptLogo from '../../img/typescript.jpg';
import nextjsLogo from '../../img/nextjs.png';
import graphqlLogo from '../../img/graphql.png';
import tailwindLogo from '../../img/tailwind.png';
import cypressLogo from '../../img/cypress.webp';

type SkillsProps = {
  skills: { img: string; title: string; description: string; id: string }[];
};

const Skills = (props: SkillsProps): JSX.Element => {
  const { skills } = props;

  let skillsList: JSX.Element[] = [];
  if (skills && skills.length > 0) {
    for (const skill of skills) {
      if (skill.img === 'javascript.jpg') skill.img = javascriptLogo;
      if (skill.img === 'enzyme.png') skill.img = enzymeLogo;
      if (skill.img === 'express.png') skill.img = expressLogo;
      if (skill.img === 'mongodb.png') skill.img = mongodbLogo;
      if (skill.img === 'mongoose.png') skill.img = mongooseLogo;
      if (skill.img === 'nodejs.png') skill.img = nodejsLogo;
      if (skill.img === 'react.png') skill.img = reactLogo;
      if (skill.img === 'redux.png') skill.img = reduxLogo;
      if (skill.img === 'sass.png') skill.img = sassLogo;
      if (skill.img === 'typescript.jpg') skill.img = typescriptLogo;
      if (skill.img === 'nextjs.png') skill.img = nextjsLogo;
      if (skill.img === 'graphql.png') skill.img = graphqlLogo;
      if (skill.img === 'tailwind.png') skill.img = tailwindLogo;
      if (skill.img === 'cypress.webp') skill.img = cypressLogo;
    }

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
        <div>Object Oriented Programming</div>
        <div>Responsive Web Design</div>
        <div>Server-Side Rendering</div>
        <div>HTML5</div>
        <div>RESTful APIs</div>
        <div>Docker</div>
        <div>Agile/Scrum</div>
        <div>Bootstrap</div>
        <div>Material UI</div>
        <div>Jira Ticketing System</div>
        <div>Linux</div>
        <div>Git</div>
        <div>Jest</div>
        <div>Vitest</div>
        <div>React Testing Library</div>
        <div>CICD</div>
        <div>MySQL</div>
        <div>PostgreSQL</div>
        <div>NoSQL</div>
        <div>Terraform</div>
        <div>AWS</div>
        <div>GoLang</div>
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
