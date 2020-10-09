import React from 'react';

import Project from './Project';
import haiNguyen from '../../img/hai-nguyen.jpg';
import ge from '../../img/ge.jpg';
import cfsa from '../../img/cfsa.jpg';
import undercooked from '../../img/undercooked.jpg';
import hiant from '../../img/hiant.jpg';
import styles from './Projects.module.scss';

const Projects = () => {
  const projectsList = projects.map((project, index) => (
    <Project
      key={index + project.title}
      img={project.img}
      title={project.title}
      description={project.description}
    />
  ));
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>My projects</h2>
      </div>
      <div className={styles.cards}>{projectsList}</div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    img: haiNguyen,
    title: 'My Personal Website',
    description:
      'I made this personal website for the purpose of showcasing my porfolios and skills to employers. The website itself is a showcase of my responsive web design skills. I built it from scratch using pure CSS/SASS, JavaScript and React.',
  },
  {
    img: ge,
    title: 'Grantor Experience 2.0',
    description:
      'As a software engineer at Dovel Technologies, I had a chance to work on the GE 2.0 project for the Federal Government. GE 2.0 is a user interface that allows grantors to view and manage grant projects. It is intuitive and user-friendly.',
  },
  {
    img: cfsa,
    title: 'CFSA Community Portal',
    description:
      'CFSA Community Portal is a project that I worked for the District of Columbia Government. It is a user-friend and responsive web application that allows collaborative workers to input, process, update and keep track of child abuse cases.',
  },
  {
    img: undercooked,
    title: 'Undercooked!',
    description:
      'Undercooked! is a fun cooking game. I built it from scratch using JavaScript/React for the frontend and Ruby on Rails for the backend. It was my graduation project from Flatiron School, the full stack web development bootcamp. I am proud of it.',
  },
  {
    img: hiant,
    title: "HiAnt's BMI Calculator",
    description:
      'HiAnt helps you calculate your BMI and the weight you need to lose/gain to be fit. It was one of the projects that I worked together with a classmate at Flatiron School. We built both frontend and backend from scratch using Ruby on Rails.',
  },
];
