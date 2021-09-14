import styled from 'styled-components';

const FooterSection = styled.footer`
    background: #1B242F;
    color: #FFF;
    heigh: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <FooterSection>
            <p>Johan 2021 All Rights Reserved</p>
        </FooterSection>
    )
}

export default Footer
