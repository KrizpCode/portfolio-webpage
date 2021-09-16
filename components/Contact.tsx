import styled from "styled-components";
import React, { useState } from 'react';

const ContactSection = styled.section`
    background: #252934;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #FCFCFC;
    padding: 10px;
`

const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 850px;
    gap: 5px;
`

const CustomInputField = styled.input`
    background: #1B242F;
    border: none;
    padding: 10px 20px;
    color: #FCFCFC;
    font-size: 1rem;

    &:focus {
        outline: 1px solid #E31B6D;
    }
`

const CustomTextArea = styled.textarea`
    resize: none;
    background: #1B242F;
    border: none;
    padding: 10px 20px;
    color: #FCFCFC;
    font-size: 1rem;

    &:focus {
        outline: 1px solid #E31B6D;
    }
`

const CustomSubmitButton = styled.input`
    background: none;
    outline: none;
    border: 2px solid #FCFCFC;
    color: #FCFCFC;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    align-self: center;
    font-size: 1rem;
    margin-top: 10px;

    &:hover {
        background: #04C2C9;
        border: 2px solid #04C2C9;
    }

    &.active {
        background: #04C2C9;
        border: 2px solid #04C2C9;
    }
`

const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!name || !email || !message) {
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <ContactSection id="contact">
            <CustomForm onSubmit={handleSubmit}>
                <CustomInputField
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <CustomInputField
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <CustomTextArea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Your Message"
                    onChange={(e) =>
                    setMessage(e.target.value)}
                    value={message}
                ></CustomTextArea>
                <CustomSubmitButton className={name && email && message && 'active'} type="submit" value="SUBMIT" />
            </CustomForm>
        </ContactSection>
    )
}

export default Contact
