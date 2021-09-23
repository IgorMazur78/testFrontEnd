import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import routers from '../../routers';
import style from './Dogs.module.css';
import { getPage, getNextPage } from '../../serviceAPI/apiservice';
import Spinner from '../Spinner/Spinner';
import Dog from '../Dog/Dog';
import Button from '../Button/Button';

const { gallery, list, item, buttonWrapperNext, buttonWrapperPrev } = style;

export default function Dogs({ listItem }) {
  const [products, setProducts] = useState(null);
  const [nextProducts, setNextProducts] = useState(null);
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState('false');

  useEffect(() => {
    setIsLoading('true');
    getPage(listItem, page)
      .then(intial => setProducts(intial))
      .catch(error => setError(error))
      .finally(() => setIsLoading('false'));
    setIsLoading('false');
    getNextPage(listItem, page)
      .then(intial => setNextProducts(intial))
      .catch(() => setNextProducts(null));
  }, [listItem, page]);

  const handleClick = () => {
    if (nextProducts && nextProducts?.length > 0) {
      setProducts(nextProducts);
      setPage(prev => (nextProducts.length > 0 ? prev + 1 : prev));
    }
  };
  const handleClickToPrev = () => {
    if (nextProducts && nextProducts?.length > 1) {
      setProducts(nextProducts);
      setPage(prev => (nextProducts.length > 0 ? prev - 1 : prev));
    }
  };

  return (
    <>
      {!isLoading && <Spinner />}
      {error && (
        <p>
          Error<Link to={routers.home}>To the Home page</Link>
        </p>
      )}
      <section className={gallery}>
        <div key={uuidv4()} className={buttonWrapperPrev}>
          {page >= 1 ? (
            <Button title="PREV" handleClick={handleClickToPrev} />
          ) : null}
        </div>
        <ul className={list}>
          {products ? (
            products.map(product => (
              <li key={uuidv4()} className={item}>
                <Dog card={product} />
              </li>
            ))
          ) : (
            <Spinner />
          )}
        </ul>
        <div key={uuidv4()} className={buttonWrapperNext}>
          {products ? <Button title="NEXT" handleClick={handleClick} /> : null}
        </div>
      </section>
    </>
  );
}
