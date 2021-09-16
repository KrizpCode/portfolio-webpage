import styled from 'styled-components';

import { elementScrollIntoView } from "seamless-scroll-polyfill";

const FooterSection = styled.footer`
    background: #1B242F;
    color: #FFF;
    heigh: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    position: relative;
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

const Footer = () => {
    const scrollToTop = (): void => {
        const element = document.getElementById(`header`)
        
        if (element) {
            elementScrollIntoView(element, { behavior: "smooth", block: "center", inline: "center" });
        }

        return
    }

    return (
        <FooterSection>
            <ToTopLink onClick={() => scrollToTop()}>^</ToTopLink>
            <p>Johan 2021 All Rights Reserved</p>
        </FooterSection>
    )
}

export default Footer
