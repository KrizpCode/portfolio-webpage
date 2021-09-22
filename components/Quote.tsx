import styled from "styled-components";

import {useEffect} from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QuoteSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #3A3F51;
    color: #FCFCFC;
    padding: 0 20px;
    overflow: hidden;

    & h2 {
        font-family: league-gothic, sans-serif;
        font-weight: 400;
        font-size: 9vw;
    }

    @media screen and (min-width: 850px) {
        & h2 {
            font-size: 4.8rem;
        }
    }

    & span {
        font-family: league-gothic, sans-serif;
        color: #04C2C9;
    }
`

const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 850px;
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
    font-size: 5vw;

    @media screen and (min-width: 600px) {
        & {
            font-size: 1.87rem;
        }
    }

    & span {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: #E31B6D;
    }
`

const quotesArray = [
    {
        leftHeading: 'When you stop learning',
        rightHeading: 'You stop growing.',
        name: 'Kenneth H. Blanchard',
    },
    {
        leftHeading: 'Quality means doing it right',
        rightHeading: 'when no one is looking.',
        name: 'Henry Ford',
    }
]

interface Props {
    quoteNumber: number
}

const Quote = ({ quoteNumber }: Props) => {

    useEffect(() => {
        const allLeft = document.querySelectorAll('.opacityLeft');
        const allRight = document.querySelectorAll('.opacityRight');
        const allCenter = document.querySelectorAll('.opacityCenter');

        allLeft.forEach((element) => {
            gsap.fromTo(element, {opacity: 0, x: '-10%'}, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 50%',
                    scrub: 1,
                },
                x: 0,
                opacity: 1,
                ease: 'none',
                duration: 2,
            })
        })

        allRight.forEach(element => {
            gsap.fromTo(element, {opacity: 0, x: '10%'}, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    end: 'top 45%',
                    scrub: 1,
                },
                x: 0,
                opacity: 1,
                ease: 'none',
                duration: 2,
            })
        })

        allCenter.forEach(element => {
            gsap.fromTo(element, {opacity: 0}, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 75%',
                    end: 'bottom 45%',
                    scrub: 1,
                },
                opacity: 1,
                ease: 'none',
                duration: 2,
            })
        })
    })

    return (
        <QuoteSection id='quote'>
            <QuoteContainer>
                <LeftHeading className="opacityLeft"><span>&quot;</span>{`${quotesArray[quoteNumber].leftHeading.toUpperCase()}`}</LeftHeading>
                <RightHeading className="opacityRight">{`${quotesArray[quoteNumber].rightHeading.toUpperCase()}`}<span>&quot;</span></RightHeading>
                <QuoteName className="opacityCenter"><span>-</span>{` ${quotesArray[quoteNumber].name} `}<span>-</span></QuoteName>
                </QuoteContainer>
        </QuoteSection>
    )
}

export default Quote
