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
    padding: 50px 10px;
`

const Card = styled.div`
    background: #1B242F;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FCFCFC;
    max-width: 300px;
    border: 3px solid #E31B6D;
    border-radius: 5px;
    overflow: hidden;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
    gap: 10px;
    border-top: 3px solid #04C2C9;
`

const ThumbnailImage = styled.img`
    width: 100%;
`

const Tags = styled.p`
    background: #3A3F51;
    padding: 2px 10px;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    gap: 10px;
`

const Button = styled.a`
    padding: 5px 10px;
    cursor: pointer;

    &.blue {
        background: #04C2C9;
    }

    &.pink {
        background: #E31B6D;
    }
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
            {projects && projects.items.map((project, i) => (
                    <Card key={i}>
                        <ThumbnailImage src={project.fields.thumbnail.fields.file.url} alt='alt text from contentful soon as well'/>
                        <CardInfo>
                        <h2>{project.fields.title}</h2>
                        {project.fields.frontEnd && project.fields.frontEnd.map((item, i) => <Tags key={i}>{item}</Tags>)}
                        {project.fields.description && project.fields.description.content[0].content[0].value}
                        <ButtonContainer>
                            <Button className='blue'>Live Demo</Button>
                            <Button className='pink'>Code Repo</Button>
                        </ButtonContainer>
                        </CardInfo>
                    </Card>
                )
            )}
        </ProjectsSection>
    )
}

export default Projects
