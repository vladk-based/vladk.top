import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaCheck, FaArchive, FaWrench } from 'react-icons/fa';

// Global styles to set background, text color, and hide scrollbar
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #21252a;
    color: #808080;
    margin: 0;
    padding: 0;
  }

  /* Hide scrollbar for WebKit browsers */
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

// Container for the projects page with specified padding
const ProjectsContainer = styled.div`
  padding: 4rem 15%;
`;

// Individual project card styling
const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2c313a; /* Slightly lighter than page background for contrast */
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
`;

// Description section that takes available space
const ProjectDescription = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

// Emphasized project name
const ProjectName = styled.h2`
  color: #f0f0f0; /* Lighter color for emphasis */
  font-size: 1.5rem; /* Slightly larger for emphasis */
  margin: 0 0 0.5rem 0;
`;

// Project description text
const Description = styled.p`
  margin: 0 0 0.5rem 0;
`;

// Container for tech tags
const TechContainer = styled.div`
  margin-bottom: 0.5rem;
`;

// Styled tech tags
const TechTag = styled.span`
  background-color: #3a3f4a; /* Distinct background for tags */
  color: #f0f0f0; /* White text for readability */
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.8rem;
`;

// Container for status with icon and text alignment
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Status text with dynamic color based on status
const StatusText = styled.span`
  margin-left: 0.5rem;
  color: ${({ status }) => {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Archived':
        return 'gray';
      case 'Maintenance':
        return 'yellow';
      default:
        return '#808080';
    }
  }};
`;

// Project image styling
const ProjectImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

// Main ProjectsPage component
const Projects = () => {
  // Sample project data (replace with your own data)
  const projects = [
    {
      name: 'Project One',
      description: 'A web app for task management.',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'Active',
      imageUrl: 'https://via.placeholder.com/200x150', // Placeholder image
    },
    {
      name: 'Project Two',
      description: 'An e-commerce platform.',
      tech: ['Vue', 'Express', 'PostgreSQL'],
      status: 'Maintenance',
      imageUrl: 'https://via.placeholder.com/200x150', // Placeholder image
    },
    {
      name: 'Project Three',
      description: 'A personal blog site.',
      tech: ['React', 'Gatsby', 'GraphQL'],
      status: 'Archived',
      imageUrl: 'https://via.placeholder.com/200x150', // Placeholder image
    },
  ];

  // Function to get status icon based on status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active':
        return <FaCheck color="green" />;
      case 'Archived':
        return <FaArchive color="gray" />;
      case 'Maintenance':
        return <FaWrench color="yellow" />;
      default:
        return null;
    }
  };

  return (
    <>
      <GlobalStyle />
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectDescription>
              <ProjectName>{project.name}</ProjectName>
              <Description>{project.description}</Description>
              <TechContainer>
                {project.tech.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechContainer>
              <StatusContainer>
                Status: {getStatusIcon(project.status)}
                <StatusText status={project.status}>{project.status}</StatusText>
              </StatusContainer>
            </ProjectDescription>
            <ProjectImage src={project.imageUrl} alt={project.name} />
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;