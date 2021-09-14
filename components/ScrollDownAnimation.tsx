import styled from "styled-components"

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 24px;
    bottom: 10%;
`

const ChevronDiv = styled.div`
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;

    &:first-child {
        animation: move 3s ease-out 1s infinite;
    }

    &:nth-child(2) {
        animation: move 3s ease-out 2s infinite;
    }

    &:before,
    &:after {
        content: ' ';
        position: absolute;
        top: 0;
        height: 100%;
        width: 51%;
        background: #fff;
    }

    &:before {
        left: 0;
        transform: skew(0deg, 30deg);
    }

    &:after {
        right: 0;
        width: 50%;
        transform: skew(0deg, -30deg);
    }

    @keyframes move {
        25% {
            opacity: 1;
        }
        33% {
            opacity: 1;
            transform: translateY(30px);
        }
        67% {
            opacity: 1;
            transform: translateY(40px);
        }
        100% {
            opacity: 0;
            transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
        }
    }
`

const TextSpan = styled.span`
    margin-top: 75px;
    font-size: 12px;
    color: #fff;
    opacity: .25;
    animation: pulse 2s linear alternate infinite;

    @keyframes pulse {
        to {
            opacity: 1;
        }
    }
`

const ScrollDownAnimation = () => {
    return (
        <ContainerDiv>
            <ChevronDiv></ChevronDiv>
            <ChevronDiv></ChevronDiv>
            <ChevronDiv></ChevronDiv>
            <TextSpan>SCROLL DOWN</TextSpan>
        </ContainerDiv>
    )
}

export default ScrollDownAnimation
