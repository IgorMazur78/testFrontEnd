import React from 'react';
import Dogs from '../components/Dogs';
import style from './Pages.module.css';

function HomePage() {
  const numberPage = 3;
  return (
    <div>
      <h3 className={style.titlePage}>Home Page</h3>
      <Dogs listItem={numberPage} />
    </div>
  );
}
export default HomePage;
