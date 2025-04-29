// ProjectCard.js
import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaArchive, FaWrench } from 'react-icons/fa';

// Styled component for the entire project card
const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2c313a;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
`;

// Left section of the card, now a flex column to control vertical alignment
const ProjectDescription = styled.div`
  flex: 1;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Container for top-aligned content (name and description)
const TopSection = styled.div`
  /* No additional styles needed, block elements stack naturally */
`;

// Container for bottom-aligned content (tech and status)
const BottomSection = styled.div`
  /* No additional styles needed, block elements stack naturally */
`;

// Styled project name
const ProjectName = styled.h2`
  color: #f0f0f0;
  font-size: 1.5rem;
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
  background-color: #3a3f4a;
  color: #f0f0f0;
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
  margin-right: 0.5rem;
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

// ProjectCard component
const ProjectCard = ({ project }) => {
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
    <ProjectCardStyled>
      <ProjectDescription>
        <TopSection>
          <ProjectName>{project.name}</ProjectName>
          <Description>{project.description}</Description>
        </TopSection>
        <BottomSection>
          <TechContainer>
            {project.tech.map((tech, i) => (
              <TechTag key={i}>{tech}</TechTag>
            ))}
          </TechContainer>
          <StatusContainer>
            Status: <StatusText status={project.status}>{project.status}</StatusText>
            {getStatusIcon(project.status)}
          </StatusContainer>
        </BottomSection>
      </ProjectDescription>
      { <ProjectImage src={project.image} alt={project.name} /> }
    </ProjectCardStyled>
  );
};

export default ProjectCard;
