import styled from "styled-components";

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: #3A3F51;
`

const Blueish = styled.p`
    color: #04C2C9;
`

const Pinkish = styled.p`
    color: #E31B6D;
`

const Projects = () => {
    return (
        <ProjectsSection id="projects">
            <p>Projects</p>
            <Blueish>Projects</Blueish>
            <Pinkish>Projects</Pinkish>
        </ProjectsSection>
    )
}

export default Projects
