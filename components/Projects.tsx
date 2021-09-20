import styled from "styled-components";
import { createClient, EntryCollection } from 'contentful';
import { useState, useEffect } from 'react';

import { IProjectFields } from '../src/schema/generated/contentful';


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
            setProjects(results)
        })
        .catch((error) => console.error(error));
    }, []);

    return (
        <ProjectsSection id="projects">
            {projects && projects.items.map((project, i) => (
                    <div key={i}>
                        <h2>{project.fields.title}</h2>
                        <img src={project.fields.featuredImage.fields.file.url} alt='image'/>
                    </div>
                )
            )}
        </ProjectsSection>
    )
}

export default Projects
