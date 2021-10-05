import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Spinner.model.css';

export default function Spinner() {
  return (
    <div className={style.spinner}>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />;
    </div>
  );
}
