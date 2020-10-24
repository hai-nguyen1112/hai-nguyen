import React from 'react';
import { connect } from 'react-redux';

import Project from './Project';
import styles from './Projects.module.scss';
import { StoreState } from '../../redux/reducers/rootReducer';
import { ProjectType } from '../../redux/actions/userActions';

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects = (props: ProjectsProps): JSX.Element => {
  const { projects } = props;

  const projectsList: JSX.Element[] = projects.map(
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
