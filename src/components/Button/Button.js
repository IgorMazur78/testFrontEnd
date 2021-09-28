/* eslint-disable prettier/prettier */
import React from 'react';
import style from './Button.module.css';

const { button } = style;

function Button({ handleClick }) {
  return (
   
      <button type="button" className={button} onClick={handleClick}>
      ❯
      </button>
   
  );
}

export default Button;
