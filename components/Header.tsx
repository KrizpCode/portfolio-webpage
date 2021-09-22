import styled from "styled-components";
import { elementScrollIntoView } from "seamless-scroll-polyfill";

import ScrollDownAnimation from "./ScrollDownAnimation"

const HeaderSection = styled.section`
    height: 100vh;
    background: #252934;
    width: 100%;
    color: #FCFCFC;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HelloHeading = styled.h1`
    font-weight: 400;
    font-size: 2rem;
`

const SubHeading = styled.h2`
    font-weight: 400;
    font-size: 1.8rem;
    text-align: center;
`

const NameSpan = styled.span`
    font-weight: 700;
    font-size: 2.2rem;
    color: #E31B6D;
`

const WorkSpan = styled.span`
    font-weight: 600;
    color: #04C2C9;
    font-size: 2rem;
`

const WorkButton = styled.button`
    background: none;
    outline: none;
    border: 2px solid #FCFCFC;
    color: #FCFCFC;
    padding: 5px 10px;
    margin-top: 20px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    font-size: 1.1rem;


    &:hover {
        background: #04C2C9;
        border: 2px solid #04C2C9;
    }
`

const Header = () => {
    const scrollToProjects = (): void => {
        const element = document.getElementById(`projects`)
        
        if (element) {
            elementScrollIntoView(element, { behavior: "smooth", block: "start", inline: "center" });
        }

        return
    }

    return (
        <HeaderSection id="header">
            <Wrapper>
            <HelloHeading>Hello,</HelloHeading>
            <SubHeading>I'm <NameSpan>Johan Eriksson</NameSpan></SubHeading>
            <SubHeading>a <WorkSpan>Full-Stack Developer</WorkSpan></SubHeading>
            </Wrapper>
            <WorkButton onClick={() => scrollToProjects()}>My Projects</WorkButton>
            <ScrollDownAnimation />
        </HeaderSection>
    )
}

export default Header
