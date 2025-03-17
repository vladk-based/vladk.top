// Projects.js
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProjectCard from '../components/ProjectCard';

import letsgocms from '../assets/letsgocms.png';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #21252a;
    color: #808080;
    margin: 0;
    padding: 0;
	padding-top: 15px;
  }

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

// Container for the projects page
const ProjectsContainer = styled.div`
  padding: 7.5rem 15%;
`;

const Projects = () => {
  const projects = [
    {
      name: 'LetsGo CMS',
      description: 'Explore, analise, and manage the LetsGo app with a user-friendly tool.',
      tech: ['Quasar', 'Vue.js', 'Vite', 'MongoDB'],
      status: 'Active',
      image: letsgocms,
    },
    {
      name: 'Unity 3D Waves Simulation',
      description: 'Simulate a realitic large water body using gerstner wave equations with custom lighting shaders',
      tech: ['Unity3D', 'C Sharp'],
      status: 'Archived',
      image: 'https://via.placeholder.com/200x150',
    },
    {
      name: 'Westernify',
      description: 'A way for western students to share their music.',
      tech: ['Qt6', 'MySQL', 'C++'],
      status: 'Archived',
      image: 'https://via.placeholder.com/200x150',
    },
  ];

  return (
    <>
      <GlobalStyle />
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
