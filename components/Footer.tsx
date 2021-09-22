import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
// import { elementScrollIntoView } from "seamless-scroll-polyfill";

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
    return (
        <FooterSection>
            <ToTopLink onClick={() => scroll.scrollToTop()}>^</ToTopLink>
            <FooterLink href="https://github.com/KrizpCode">GitHub</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/johaneriksson93/">LinkedIn</FooterLink>
        </FooterSection>
    )
}

export default Footer
