import styled from "styled-components";
import { createClient, EntryCollection } from 'contentful';
import { useState, useEffect } from 'react';

import { IProjectFields } from '../src/schema/generated/contentful';
import ProjectCard from "./ProjectCard";


const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: #3A3F51;
    position: relative;
    overflow: hidden;
`

const Title = styled.h2`
    margin-top: 40px;
    font-size: 9vw;
    text-decoration: underline;
    text-decoration-color: #04C2C9;

    @media screen and (min-width: 850px) {
        & {
            font-size: 4.8rem;
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 100px 10px;
    gap: 10px;
`

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY!,
});

const Projects = () => {
    const [projects, setProjects] = useState<null | EntryCollection<IProjectFields>>(null)

    useEffect(() => {
        client
        .getEntries<IProjectFields>()
        .then((results) => {
            console.log(results);
            setProjects(results)
        })
        .catch((error) => console.error(error));
    }, []);

    return (
        <ProjectsSection id="projects">
            <Title>PROJECTS</Title>
            <Container>
                {projects && <ProjectCard projects={projects} />}
            </Container>
        </ProjectsSection>
    )
}

export default Projects
