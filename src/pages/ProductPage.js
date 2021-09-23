import React from 'react';
import Dogs from '../components/Dogs';
import style from './Pages.module.css';

function ProductPage() {
  const numberPage = 8;
  return (
    <div>
      <h3 className={style.titlePage}>Product Page</h3>
      <Dogs listItem={numberPage} />
    </div>
  );
}
export default ProductPage;
