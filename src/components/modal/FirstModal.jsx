import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';


function FirstModal() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <StButton onClick={openModal}>
                1 : 여는 버튼
            </StButton>
            {
                isOpen && (
                    <StModalBox>
                        <StModalContents>
                            <p>
                                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
                            </p>
                            <button onClick={closeModal}>닫기</button>
                            <button>확인</button>
                        </StModalContents>

                    </StModalBox>
                )
            }
        </div>
    );
};

export default FirstModal

const StModalBox = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`;

const StModalContents = styled.div`
    background-color: #fff;
    padding: 20px;
    width: 70%;
    height: 50%;
    border-radius: 12px;
`;

const StButton = styled.button`
border: none;
cursor: pointer;
border-radius: 8px;
background-color: rgb(85, 239, 196);
color: rgb(0, 0, 0);
height: 40px;
width: 100px;
`