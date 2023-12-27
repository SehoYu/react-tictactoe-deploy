import React from 'react';
import './Square.css';

// 인자로 전달되는 props를 구조분해
const Square = ({value, onClick}) => {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
}

export default Square;