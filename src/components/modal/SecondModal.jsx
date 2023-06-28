import React from 'react'
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';

function SecondModal() {

    const [isOpen, setIsOpen] = useState(false);
    // 바깥 영역을 감지하기 위한 첫번째!
    const modalRef = useRef();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const clickOutside = (event) => {
        // modalRef.current ->  <StModalBox ref={modalRef}> 모달 창 영역!
        // event.target -> 내가 클릭한 영역!
        if (modalRef.current === event.target) {
            closeModal();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, []);

    return (
        <div>
            <StButton onClick={openModal}>
                2 : 여는 버튼
            </StButton>
            {
                isOpen && (
                    <StModalBox ref={modalRef}>
                        <StModalContents>
                            <p>
                                바깥 영역 누르면 닫히는 모달!
                            </p>
                            <button onClick={closeModal}>X</button>
                        </StModalContents>

                    </StModalBox>
                )
            }
        </div>
    );
};


export default SecondModal

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