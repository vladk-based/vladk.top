import { useState } from 'react';
import { FaArrowUp, FaSun, FaMoon, FaTerminal } from 'react-icons/fa'; // Using react-icons for icons
import styled from 'styled-components';

// Styled components
const NavBar = styled.nav`
  position: sticky;
  top: 0;
  background-color: #21252a;
  padding: 1rem 15%; // Empty space left and right
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  font-family: 'Fira Code', monospace;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ScrollTopButton = styled.button`
  background: none;
  border: none;
  color: #e0e0e0;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #ff5555;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1rem;
  padding-right: 2rem;

  span {
    color: #ff5555;
    font-weight: bold;
  }

  &:hover {
    color: #ffffff;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 1.5rem;
  background-color: #40454a;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #e0e0e0;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #ff5555;
  }
`;

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isCursorSocketOn, setIsCursorSocketOn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add your dark mode implementation here
  };

  const toggleCursorSocket = () => {
    setIsCursorSocketOn(!isCursorSocketOn);
    // Add your cursor socket implementation here
  };

  return (
    <NavBar>
      <NavLeft>
        <ScrollTopButton onClick={scrollToTop} title="Back to top">
          <FaArrowUp />
        </ScrollTopButton>
      </NavLeft>
      
      <NavRight>
        <NavLink href="#about">
          <span>a</span>bout
        </NavLink>
        <NavLink href="#work">
          <span>w</span>ork
        </NavLink>
        <NavLink href="#projects">
          <span>p</span>rojects
        </NavLink>
        
        <Divider />
        
        <ToggleButton 
          onClick={toggleDarkMode}
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ToggleButton>
        
        <ToggleButton 
          onClick={toggleCursorSocket}
          title={isCursorSocketOn ? "Disable cursor socket" : "Enable cursor socket"}
        >
          <FaTerminal />
        </ToggleButton>
      </NavRight>
    </NavBar>
  );
};

export default Navigation;
