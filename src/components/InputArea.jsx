import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';

function InputArea() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // 계산 , 추가
  const changeEnteredNum = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(',', ''));
    setPrice(removedCommaValue.toLocaleString());
  };

  return (
    <>
      <h2>02. Input</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // alert 시 ,제거
          const plainPrice = price.replaceAll(',', '');
          alert(`이름 : ${name}, 가격 : ${plainPrice}`);
        }}
      >
        <label>이름</label>
        <StInput
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>가격</label>
        <StInput
          type="text"
          value={price}
          onChange={(e) => {
            changeEnteredNum(e);
          }}
        />
        <div>
          <button>저장</button>
        </div>
      </form>
    </>
  );
}

export default InputArea;

const StInput = styled.input`
  border: 1px solid #333333;
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;
