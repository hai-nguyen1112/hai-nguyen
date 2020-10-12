import React from 'react';

import Project from './Project';
import haiNguyen from '../../img/hai-nguyen.jpg';
import ge from '../../img/ge.jpg';
import cfsa from '../../img/cfsa.jpg';
import undercooked from '../../img/undercooked.jpg';
import hiant from '../../img/hiant.jpg';
import styles from './Projects.module.scss';

const Projects = (): JSX.Element => {
  const projectsList: JSX.Element[] = projects.map(
    (
      project: {
        title: string;
        img: string;
        description: string;
        projectDetail: {
          title: string;
          subTitle: string;
          details: string[];
          gitRepoLink: string;
          demoLink: string;
          note: string;
        };
      },
      index: number
    ): JSX.Element => (
      <Project
        key={index + project.title}
        img={project.img}
        title={project.title}
        description={project.description}
        projectDetail={project.projectDetail}
      />
    )
  );

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

const projects: {
  title: string;
  img: string;
  description: string;
  projectDetail: {
    title: string;
    subTitle: string;
    details: string[];
    gitRepoLink: string;
    demoLink: string;
    note: string;
  };
}[] = [
  {
    img: haiNguyen,
    title: 'My Personal Website',
    description:
      'I made this personal website for the purpose of showcasing my porfolio and skills to employers. The website itself is a showcase of my responsive web design skills. I built it from scratch using pure CSS/SASS, JavaScript and React.',
    projectDetail: {
      title: 'My Personal Website',
      subTitle: 'A personal project to showcase my portfolio and skills.',
      details: [
        'Created SPA components using JavaScript/React.',
        'Used advanced CSS/SASS to style the web page, create interactive effects and make it responsive. I built everything from scratch including buttons, backdrop, modal, popup, side drawer, cards, graphics, ... without relying on thrid party libraries such as Material UI, Bootstrap, Semantic UI, ...',
        'Used React Router Dom for routing.',
        'Used Jest/Enzyme to write unit and integration tests for components.',
        'Used TypeScript to add type annotations for analyzing code and catching errors during development.',
        'Plans for the future: add a NodeJS backend and MongoDB database to transfer the hard-coded information to the backend and use Redux for state management.',
        'For a closer look at the code and all dependencies/packages used in this project, go to the Git repo linked below.',
      ],
      gitRepoLink: 'https://github.com/hai-nguyen1112/hai-nguyen',
      demoLink: '#',
      note: '',
    },
  },
  {
    img: ge,
    title: 'Grantor Experience 2.0',
    description:
      'As a software engineer at Dovel Technologies, I had a chance to work on the GE 2.0 project for the Federal Government. GE 2.0 is a user interface that allows grantors to view and manage grant projects. It is intuitive and user-friendly.',
    projectDetail: {
      title: 'Grantor Experience 2.0',
      subTitle:
        'A functional, responsive and user-friendly web application that allows grantors to view and manage grant projects.',
      details: [
        'Built the frontend using JavaScript, React framework, React Hooks.',
        'Used React Router Dom for routing.',
        'Used Axios to make RESTful API requests to the backend.',
        'Used Redux for state management, used prop-types for data type checking, used CSS/SASS for styling.',
        'Worked in Agile environment, used JIRA, Confluence, GitHub and Bitbucket.',
      ],
      gitRepoLink: '',
      demoLink: 'https://home.grantsolutions.gov/home/about/',
      note: '',
    },
  },
  {
    img: cfsa,
    title: 'CFSA Community Portal',
    description:
      'CFSA Community Portal is a project that I worked on for the District of Columbia Government. It is a responsive web application that allows Washington DC social workers to input, process, update and keep track of child abuse cases.',
    projectDetail: {
      title: 'CFSA Community Portal',
      subTitle:
        'A functional, responsive and user-friendly web application that allows social workers to manage child-abuse cases.',
      details: [
        'Built the frontend using JavaScript and React/Redux framework.',
        'Used React Router Dom for routing.',
        'Used RESTful API requests to communicate with Oracle backend databases.',
        'Used Material UI and advanced CSS to make the frontend responsive.',
        'Used Redux-OIDC (Open ID Connect) with SecureAuth for user authentication and authorization.',
      ],
      gitRepoLink: '',
      demoLink: 'https://cfsacommunity.dc.gov/login',
      note: '',
    },
  },
  {
    img: undercooked,
    title: 'Undercooked!',
    description:
      'Undercooked! is a fun cooking game. I built it from scratch using JavaScript/React for the frontend and Ruby on Rails for the backend. It was my graduation project from Flatiron School where I learned full stack web development.',
    projectDetail: {
      title: 'Undercooked!',
      subTitle:
        'A competitive against-the-clock cooking challenge with a leaderboard.',
      details: [
        'Built backend API using Ruby on Rails to handle data persistence.',
        'Used Bcrypt with secure passwords for user registration, authentication and authorization.',
        'Built frontend with React components and utilized state and props to manipulate game logic',
        'Used React Router Dom for routing.',
        'Used CSS animations, Semantic UI animations and React libraries to add game effects.',
        'For a closer look at the code and all dependencies/packages used in this project, go to the Git repo linked below.',
      ],
      gitRepoLink: 'https://github.com/hai-nguyen1112/undercooked_frontend',
      demoLink: 'https://undercooked.herokuapp.com/',
      note:
        "Note: Refresh the browser if the demo page fails to load. It's a common herokuapp issue.",
    },
  },
  {
    img: hiant,
    title: "HiAnt's BMI Calculator",
    description:
      'HiAnt helps users calculate their BMI and the weight they need to lose or gain to be in the healthy range. It was one of the projects that I worked on together with a classmate at Flatiron School. We built both frontend and backend from scratch using Ruby on Rails.',
    projectDetail: {
      title: "HiAnt's BMI Calculator",
      subTitle:
        'A user-friendly BMI calculator, providing real-time health status, record tracking, and weight-related benchmarks',
      details: [
        'Built both frontend and backend using Ruby following the MVC pattern.',
        'Manually designed the database schema and set ActiveRecord relationships.',
        'Used embedded Ruby, CSS and Bootstrap framework to design the user interface',
        'Applied secure passwords with Bcrypt for user registration, authentication and authorization.',
        'For a closer look at the code and all dependencies/packages used in this project, go to the Git repo linked below.',
      ],
      gitRepoLink: 'https://github.com/hai-nguyen1112/bmi-calculator',
      demoLink: 'http://hiant.herokuapp.com/',
      note:
        "Note: Refresh the browser if the demo page fails to load. It's a common herokuapp issue. To check demo, enter username: hai, pw: 123456.",
    },
  },
];
