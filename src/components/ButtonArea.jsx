import React from 'react'
import { css, styled } from "styled-components"
function ButtonArea() {
    return (
        <>
            <h2>01. Button</h2>
            <div>
                <ButtonContainer bc='#55efc4' color='#000000' size="large" outlined={true} rightIcon="TEST">테스트</ButtonContainer>
                <ButtonContainer bc='#55efc4' color='#000000' size="medium">테스트</ButtonContainer>
                <ButtonContainer bc='#55efc4' color='#000000' size="small">테스트</ButtonContainer>
            </div>
            <div>
                <ButtonContainer bc='#fab1a0' color='#d63031' size="large" outlined={true}>테스트</ButtonContainer>
                <ButtonContainer bc='#fab1a0' color='#d63031' size="medium">테스트</ButtonContainer>
                <ButtonContainer bc='#fab1a0' color='#d63031' size="small">테스트</ButtonContainer>
            </div>

        </>
    )
}

export default ButtonArea;

const ButtonContainer = ({ children, ...rest }) => {
    return (
        <>
            <StButton {...rest}>{children}{rest.rightIcon}</StButton>
        </>
    )
}

const StButton = styled.button`
border: none;
cursor: pointer;
border-radius: 8px;

background-color: ${({ bc }) => bc};
color: ${({ color }) => color};
font-weight: 0;

margin: 5px;

${({ size }) => {
        switch (size) {
            case "large":
                return css`
                height: 50px;
                width: 200px;
                `;
            case "medium":
                return css`
                height: 45px;
                width: 130px;
                `;
            case "small":
                return css`
                height: 40px;
                width: 100px;
                `;
        }
    }}

    ${({ outlined, bc }) => {
        if (outlined) {
            return css`
               border: 3px solid ${bc};
               background-color : #fff ;
               font-weight: 600;
            `;
        }
    }}
`;
