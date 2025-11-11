import React from 'react';
import { connect } from 'react-redux';

import Project from './Project';
import styles from './Projects.module.scss';
import { StoreState } from '../../redux/reducers/rootReducer';
import { ProjectType } from '../../redux/actions/userActions';
import hainguyen from '../../img/hai-nguyen.jpg';
import ge from '../../img/ge.jpg';
import cfsa from '../../img/cfsa.jpg';
import undercooked from '../../img/undercooked.jpg';
import hiant from '../../img/hiant.jpg';
import wildOasis from '../../img/wildoasis.png';
import jobBoard from '../../img/jobboard.png';

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects = (props: ProjectsProps): JSX.Element => {
  const { projects } = props;

  let projectsList: JSX.Element[] = [];
  if (projects && projects.length > 0) {
    for (const project of projects) {
      if (project.img === 'wildoasis.png') project.img = wildOasis;
      if (project.img === 'jobboard.png') project.img = jobBoard;
      if (project.img === 'hai-nguyen.jpg') project.img = hainguyen;
      if (project.img === 'ge.jpg') project.img = ge;
      if (project.img === 'cfsa.jpg') project.img = cfsa;
      if (project.img === 'undercooked.jpg') project.img = undercooked;
      if (project.img === 'hiant.jpg') project.img = hiant;
    }

    projectsList = projects.map(
      (project, index: number): JSX.Element => (
        <Project
          key={index + project.title}
          img={project.img}
          title={project.title}
          description={project.description}
          projectDetail={project.projectDetail}
        />
      )
    );
  }

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>My projects</h2>
      </div>
      <div className={styles.cards}>{projectsList}</div>
    </div>
  );
};

const mapStateToProps = (state: StoreState): { projects: ProjectType[] } => {
  return {
    projects: state.user.user.projects,
  };
};

export default connect(mapStateToProps)(Projects);
