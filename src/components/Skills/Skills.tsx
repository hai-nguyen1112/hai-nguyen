import React from 'react';

import Skill from './Skill';
import javascriptLogo from '../../img/javascript.jpg';
import reactLogo from '../../img/react.png';
import reduxLogo from '../../img/redux.png';
import typescriptLogo from '../../img/typescript.jpg';
import enzymeLogo from '../../img/enzyme.png';
import nodejsLogo from '../../img/nodejs.png';
import sassLogo from '../../img/sass.png';
import expressLogo from '../../img/express.png';
import mongodbLogo from '../../img/mongodb.png';
import mongooseLogo from '../../img/mongoose.png';
import styles from './Skills.module.scss';

const Skills = (): JSX.Element => {
  const skillsList: JSX.Element[] = skills.map(
    (
      skill: { title: string; img: string; description: string },
      index: number
    ): JSX.Element => (
      <Skill
        key={skill.title + index}
        img={skill.img}
        title={skill.title}
        description={skill.description}
      />
    )
  );

  return (
    <div id="skills" className={styles.container}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>My skills</h2>
      </div>
      <div className={styles.cards}>{skillsList}</div>
      <div className={styles.otherSkills}>
        <div>Other skills</div>
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

export default Skills;

const skills: { img: string; title: string; description: string }[] = [
  {
    img: javascriptLogo,
    title: 'JavaScript',
    description:
      'JavaScript is my main programming language. I have been using JavaScript for both frontend and backend projects.',
  },
  {
    img: reactLogo,
    title: 'React',
    description:
      'React is my favorite frontend framework due to its component-based nature which makes it easy to build and maintain single page apps.',
  },
  {
    img: reduxLogo,
    title: 'Redux',
    description:
      'I have been using Redux for state management. It is a great addition to React for building powerful frontend apps.',
  },
  {
    img: typescriptLogo,
    title: 'TypeScript',
    description:
      'I use type annotations provided by TypeScript to analyze my code and catch errors during development.',
  },
  {
    img: enzymeLogo,
    title: 'Enzyme',
    description:
      'I use Jest/Enzyme to write unit and integration tests for my apps.',
  },
  {
    img: sassLogo,
    title: 'Sass',
    description:
      'I use Sass to write better and easy-to-maintain CSS code. This personal website itself is one of my Sass projects.',
  },
  {
    img: nodejsLogo,
    title: 'NodeJS',
    description:
      'I use NodeJS to write fast and scalable network applications.',
  },
  {
    img: expressLogo,
    title: 'Express',
    description:
      'I use Express to write NodeJS applications faster and more efficiently.',
  },
  {
    img: mongodbLogo,
    title: 'MongoDB',
    description:
      'MongoDB, a document-oriented NoSQL database, is currently my main database program.',
  },
  {
    img: mongooseLogo,
    title: 'Mongoose',
    description:
      'Mongoose is a library that I use to make connection between my MongoDB databases and NodeJS applications.',
  },
];
