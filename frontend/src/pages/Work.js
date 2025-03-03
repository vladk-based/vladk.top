// Work.js
import styled from 'styled-components';

const WorkSection = styled.section`
	padding-top: 60px; /* Matches nav height */
	min-height: calc(100vh - 60px);
	background-color: #21252a;
	padding: 4rem 10%;
`;

const Work = () => {
	return <WorkSection>Resume Content Here</WorkSection>;
};

export default Work;