import styled from "styled-components";

const BackgroundDiv = styled.div`
    width: 100%;
    position: relative;
    height: 100px;
`

const ArrowShapedDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    & svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 100px;
        margin-left: -1px;
    }

    & .shape-fill {
        fill: #252934;
    }
`

const ArrowSection = () => {
    return (
        <BackgroundDiv>
            <ArrowShapedDiv>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
            </svg>
            </ArrowShapedDiv>
        </BackgroundDiv>
    )
}

export default ArrowSection