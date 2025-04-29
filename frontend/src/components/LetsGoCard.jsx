import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCode, FaApple, FaGooglePlay } from 'react-icons/fa';
import foundersImage from '../assets/foundersImage.png'; // Adjust the path as needed

// Static data
const techStack = ['MongoDB', 'Node.js', 'AWS EC2', 'S3 Bucket', 'Docker'];

// Styled Components
const WorkContainer = styled.div`
  padding: 7.5rem 15%;
  background-color: #21252a;
  color: #ccc;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const Section = styled.div`
  flex: 1;
`;

const EmphasizedText = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
`;

const StyledCompanyName = styled.span`
  font-style: italic;
  color: #aaffee;
`;

const RolesContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RoleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 15px;
`;

const TechStackContainer = styled.div`
  margin-top: 1rem;
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const TechBadge = styled.div`
  background-color: #333;
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
`;

const SmallMarginParagraph = styled.p`
  margin-top: 0.5rem;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 150px;
  margin-top: 15px;
`;

const StyledLink = styled.a`
  color: #aaffee;
  text-decoration: underline;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const StyledButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

// Component
const LetsGoCard = () => {
  return (
    <WorkContainer>
      <Section>
        <p>
          In <EmphasizedText>May 2024</EmphasizedText>, I joined{' '}
          <StyledCompanyName>The LetsGo App Inc.</StyledCompanyName> as a
        </p>
        <RolesContainer>
          <RoleItem>
            <FaBriefcase />
            <span>Co-Founder</span>
          </RoleItem>
          <RoleItem>
            <FaCode />
            <span>Backend Lead</span>
          </RoleItem>
        </RolesContainer>
        <TechStackContainer>
          <strong>Tech Stack:</strong>
          <TechBadges>
            {techStack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </TechBadges>
        </TechStackContainer>
        <Paragraph>
          The LetsGo App is an app which allwos you to connect with friend, host robust events, and gain <b>AURA</b>!.
        </Paragraph>
        <Paragraph>
          Responsible for the management, maintenance, and writing a cross-platform RESTful API. Responsible for writing, managing, and maintaining the CMS admin panel.
        </Paragraph>
      </Section>
      <Section>
        { <StyledImage src={foundersImage} alt="Me and the founder" /> }
        <Paragraph>
          Check out the <StyledLink href="https://theletsgo.app/">official website</StyledLink>
        </Paragraph>
        <SmallMarginParagraph>Or click the below links to download the letsgo app:</SmallMarginParagraph>
        <ButtonContainer>
          <StyledButton
            href="https://apps.apple.com/ca/app/the-letsgo-app/id6575390437"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple /> App Store
          </StyledButton>
          <StyledButton
            href="https://play.google.com/store/apps/details?id=com.theletsgoapp.letsgo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay /> Play Store
          </StyledButton>
        </ButtonContainer>
      </Section>
    </WorkContainer>
  );
};

export default LetsGoCard;
