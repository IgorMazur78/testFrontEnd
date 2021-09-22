import React from 'react';
import Dogs from "../Dogs";
import style from "../../styles/styleComponents.module.css" 


export default function HomePage() {
   const numberPage = 3
   return(
       <div>
           <h3 className={style.title}>Home Page</h3>
           <Dogs listItem={numberPage}/>
       </div>
   )
}