import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const Nav = styled.nav`
    background: #1B242F;
    color: #FCFCFC;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    border-bottom: 3px solid #04C2C9;
    top: 0;
    left: 0;
    padding: 10px 20px;
    z-index: 999;
`

const StyledLink = styled.a`
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.4s ease-in-out;

    &:hover {
        color: #E31B6D;
    }
`

const BurgerMenuWrapper = styled.div`
    width: 35px;
    height: 25px;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;

    & span:nth-child(1) {
        top: 0px;
    }

    & span:nth-child(2),
    & span:nth-child(3) {
        top: 10px;
    }

    & span:nth-child(4) {
        top: 20px;
    }

    &.open span:nth-child(1) {
        top: 10px;
        width: 0;
        left: 50%;
    }

    &.open span:nth-child(2) {
        transform: rotate(45deg);
    }

    &.open span:nth-child(3) {
        transform: rotate(-45deg);
    }

    &.open span:nth-child(4) {
        top: 10px;
        width: 0;
        left: 50%;
    }
`

const BurgerMenuSpan = styled.span`
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #FCFCFC;
    left: 0;
    transition: .3s ease-in-out;
`

const MobileMenu = styled.div`
    top: 48px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    overflow: hidden;
    background: #1B242F;
    padding: 20px 30px;
    gap: 20px;
    border-bottom: 1px solid #E31B6D;

    transform: scaleY(0);    
    transform-origin: top;
    transition: .3s ease-in-out;


    &.open {
        transform: scaleY(1);
    }
`

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    const scrollToElement = (idName: string): void => {
        document.getElementById(`${idName}`)!.scrollIntoView({behavior: 'smooth'});
        return
    }

    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleScroll = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        window.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    })


    return (
        <Nav ref={ref} id="nav">
            <BurgerMenuWrapper id="burger"
                className={`${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}>
                <BurgerMenuSpan></BurgerMenuSpan>
                <BurgerMenuSpan></BurgerMenuSpan>
                <BurgerMenuSpan></BurgerMenuSpan>
                <BurgerMenuSpan></BurgerMenuSpan>
            </BurgerMenuWrapper>
            <MobileMenu
                className={`${isOpen ? 'open' : ''}`}>
                <StyledLink onClick={() => scrollToElement('header')}>Home</StyledLink>
                <StyledLink onClick={() => scrollToElement('about')}>About</StyledLink>
                <StyledLink onClick={() => scrollToElement('projects')}>Projects</StyledLink>
                <StyledLink onClick={() => scrollToElement('contact')}>Contact</StyledLink>
            </MobileMenu>
        </Nav>
    )
}

export default Navbar
