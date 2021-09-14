import styled from "styled-components";

import {useEffect} from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QuoteSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: #3A3F51;
    color: #FCFCFC;
    padding: 0 20px;
    overflow: hidden;

    & h2 {
        font-family: league-gothic, sans-serif;
        font-weight: 400;
        font-size: 2.6rem;
    }

    & span {
        font-family: league-gothic, sans-serif;
        color: #04C2C9;
    }
`

const LeftHeading = styled.h2`
    text-align: left;
`

const RightHeading = styled.h2`
    text-align: right;
`

const QuoteName  = styled.h3`
    font-weight: 300;
    text-align: center;

    & span {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: #E31B6D;
    }
`


const Quote = () => {

    useEffect(() => {

        gsap.fromTo('.opacityLeft', {opacity: 0, x: -50}, {
            scrollTrigger: {
                trigger: '.opacityLeft',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
            x: 0,
            opacity: 1,
            pin: '#quote',
            ease: 'none',
            duration: 2,
        })

        gsap.fromTo('.opacityRight', {opacity: 0, x: 50}, {
            scrollTrigger: {
                trigger: '.opacityRight',
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1,
            },
            x: 0,
            pin: '#quote',
            opacity: 1,
            ease: 'none',
            duration: 2,
        })

        gsap.fromTo('.opacity', {opacity: 0}, {
            scrollTrigger: {
                trigger: '.opacity',
                start: 'top 70%',
                end: 'bottom 50%',
                scrub: 1,
            },
            opacity: 1,
            pin: '#quote',
            ease: 'none',
            duration: 2,
        })
    })

    return (
        <QuoteSection id='quote'>
                <LeftHeading className="opacityLeft"><span>"</span>WHEN YOU STOP LEARNING</LeftHeading>
                <RightHeading className="opacityRight">YOU STOP GROWING<span>"</span></RightHeading>
                <QuoteName className="opacity"><span>-</span> Kenneth H. Blanchard <span>-</span></QuoteName>
        </QuoteSection>
    )
}

export default Quote
