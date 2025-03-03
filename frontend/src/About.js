import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, Fa500Px } from 'react-icons/fa';

// Styled components
const AboutSection = styled.section`
  background-color: #21252a;
  padding: 4rem 10%; // Same margins as nav
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Aptos', 'Fira Code', monospace; // Aptos first, falls back to Fira Code
  overflow: hidden; // No scrolling
`;

const LeftContent = styled.div`
  width: 65%;
  padding-right: 2rem;
`;

const IntroText = styled.p`
  color: #808080;
  font-size: 0.9rem;
  margin: 0;
  letter-spacing: 1px;
`;

const Name = styled.h1`
  color: #e0e0e0;
  font-size: 3.5rem;
  margin: 0.5rem 0;
  font-weight: 600;
  line-height: 1.1;
`;

const Title = styled.p`
  color: #a0a0a0;
  font-size: 1.2rem;
  margin: 0.5rem 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  background-color: #a0a0a0;
  border-radius: 50%;
`;

const BodyText = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 80%;
`;

const RightContent = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #2a2f35;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: #353b42;
    color: #ffffff;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <LeftContent>
        <IntroText>My Name Is</IntroText>
        <Name>Vlad Krstevski</Name>
        <Title>
          Co-Founder <Dot /> Web Dev <Dot /> Backend Architect
        </Title>
        <BodyText>
          An experienced 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris.
        </BodyText>
      </LeftContent>

      <RightContent>
        <SocialButton href="https://github.com/yourusername" target="_blank">
          <FaGithub /> github
        </SocialButton>
        <SocialButton href="https://linkedin.com/in/yourusername" target="_blank">
          <FaLinkedin /> linkedin
        </SocialButton>
        <SocialButton href="https://instagram.com/yourusername" target="_blank">
          <FaInstagram /> instagram
        </SocialButton>
        <SocialButton href="https://threads.net/yourusername" target="_blank">
          <Fa500Px /> threads
        </SocialButton>
      </RightContent>
    </AboutSection>
  );
};

export default About;
