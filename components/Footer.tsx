import styled from 'styled-components';

import { elementScrollIntoView } from "seamless-scroll-polyfill";

const FooterSection = styled.footer`
    background: #1B242F;
    color: #FFF;
    heigh: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 50px;
    gap: 20px;
`

const ToTopLink = styled.a`
    background: #E31B6D;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    margin-top: -20px;
`

const FooterLink = styled.a`
    color: #E31B6D;
    font-weight: 600;

    &:hover {
        color: #FCFCFC
    }
`

const Footer = () => {
    const scrollToTop = (): void => {
        const element = document.getElementById(`header`)
        
        if (element) {
            elementScrollIntoView(element, { behavior: "smooth", block: "start", inline: "center" });
        }

        return
    }

    return (
        <FooterSection>
            <ToTopLink onClick={() => scrollToTop()}>^</ToTopLink>
            <FooterLink href="https://github.com/KrizpCode">GitHub</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/johaneriksson93/">LinkedIn</FooterLink>
        </FooterSection>
    )
}

export default Footer
