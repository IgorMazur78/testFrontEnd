import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import routers from '../../routers';
import style from './Dogs.module.css';
import { getPage, getNextPage } from '../../services/api';
import Spinner from '../Spinner/Spinner';
import Dog from '../Dog/Dog';
import Button from '../Button/Button';

const {
  gallery,
  list,
  list8,
  item,
  item8,
  buttonWrapperNext,
  buttonWrapperPrev,
} = style;

function Dogs({ listItem }) {
  const [products, setProducts] = useState(null);
  const [nextProducts, setNextProducts] = useState([]);
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
    if (page > 0) {
      setPage(prev => prev - 1);
    }
  };
  const isNextButton = (listItem === 3 && nextProducts.length !== 0) || false;
  console.log('products:', products);
  console.log('nextProducts.length:', nextProducts.length);

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
            <Button title="❮" handleClick={handleClickToPrev} />
          ) : null}
        </div>
        <ul className={listItem === 3 ? list : list8}>
          {products ? (
            products.map(product => (
              <li key={uuidv4()} className={listItem === 3 ? item : item8}>
                <Dog numberCard={listItem} card={product} />
              </li>
            ))
          ) : (
            <Spinner />
          )}
        </ul>
        <div key={uuidv4()} className={buttonWrapperNext}>
          {isNextButton ? <Button title="❯" handleClick={handleClick} /> : null}
        </div>
      </section>
    </>
  );
}
export default Dogs;
