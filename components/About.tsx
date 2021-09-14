import styled from "styled-components";

const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: #3A3F51;
    overflow: hidden;
`

const Blueish = styled.p`
    color: #04C2C9;
`

const Pinkish = styled.p`
    color: #E31B6D;
`

const About = () => {
    return (
        <AboutSection id="about">
            <p>About</p>
            <Blueish>About</Blueish>
            <Pinkish>About</Pinkish>
        </AboutSection>
    )
}

export default About
