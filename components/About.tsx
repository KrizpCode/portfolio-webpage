import styled from "styled-components";

const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #3A3F51;
    overflow: hidden;
    padding: 0 20px;
    gap: 50px;

    @media screen and (min-width: 700px) {
        & {
            gap: 0px;
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 850px;
    padding-bottom: 100px;
    gap: 50px;

    @media screen and (min-width: 700px) {
        & {
            gap: 150px;
            padding-bottom: 0px;
        }
    }
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

const CustomImage = styled.img`
    border-radius: 50%;
    width: 250px;
    margin: 10px;
    box-shadow: 0 0 0 5px #E31B6D,
                0 0 0 10px #04C2C9;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media screen and (min-width: 700px) {
        & {
            flex-direction: row;
        }
    }
`
const TextContainer = styled.div`
    & h3 {
        font-size: 5.5vw;
        text-decoration: underline;
        text-decoration-color: #04C2C9;
    }

    @media screen and (min-width: 850px) {
        & h3 {
            font-size: 2.9rem;
        }
    }
`

const FocusAreas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media screen and (min-width: 700px) {
        & {
            flex-direction: row;
            align-items: start;
        }
    }

    & h4 {
        font-size: 24px;
        text-decoration: underline;
        text-decoration-color: #E31B6D;
    }

    @media screen and (min-width: 600px) {
        & h4 {
            font-size: 3.76vw;
        }
    }

    @media screen and (min-width: 850px) {
        & h4 {
            font-size: 2rem;
        }
    }
`

const FocusCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 66%;
`

const About = () => {
    return (
        <AboutSection id="about">
            <Title>ABOUT</Title>
            <Container>
                <FocusAreas>
                    <FocusCard>
                        <h4>Stable</h4>
                        <p>I write beautiful and easy to read code through TDD that is unit tested.</p>
                    </FocusCard>
                    <FocusCard>
                        <h4>Smooth</h4>
                        <p>My websites always use a responsive design with smooth animations.</p>
                    </FocusCard>
                    <FocusCard>
                        <h4>User Friendly</h4>
                        <p>My designs focus on a user fiendly experience.</p>
                    </FocusCard>
                </FocusAreas>
                <InfoContainer>
                    <CustomImage src="/johan-eriksson.jpg" alt="hello"/>
                    <TextContainer>
                        <h3>Johan Eriksson</h3>
                        <p>A Full-Stack JavaScript developer with a passion for coding, solving problems & teamwork. I'm a quick learner that is motivated and driven to continuously grow & learn. I really enjoy leading teams & helping others develop, as well as creating amazing apps & services that are both user-friendly and visually appealing.</p>
                    </TextContainer>
                </InfoContainer>
            </Container>
        </AboutSection>
    )
}

export default About
