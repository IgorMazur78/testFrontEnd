/* eslint-disable prettier/prettier */
import React from 'react';
import style from './Button.module.css';

const { button } = style;

function Button({ handleClick, title }) {
  return (
   
      <button type="button" className={button} onClick={handleClick}>
        {title}
      </button>
   
  );
}

export default Button;
