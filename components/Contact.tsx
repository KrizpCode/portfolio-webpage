import styled from "styled-components";

const ContactSection = styled.section`
    background: #252934;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #FCFCFC;
`

const Contact = () => {
    return (
        <ContactSection id="contact">
            <p>Contact</p>
        </ContactSection>
    )
}

export default Contact
