import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import routers from "../routers";
import style from "../styles/styleComponents.module.css";
import ApiProduct from "../serviceAPI/apiservice";
import Spinner from "./Spinner";

export default function Dogs({ listItem }) {
  const [homeProduct, setHomeProduct] = useState(null);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState("false");
  useEffect(() => {
    setIsLoading("true");
    ApiProduct.fetchBreedsPage(listItem, page)
      .then((homeProduct) => setHomeProduct(homeProduct))
      .catch((error) => setError(error))
      .finally(() => setIsLoading("false"));
    setIsLoading("false");
  }, [listItem, page]);
  console.log("homeProduct:", homeProduct);
  console.log("error:", error);
  console.log("isLoading:", isLoading);

  return (
    <div className={style.container}>
      {!isLoading && <Spinner />}
      {error && (
        <p>
          Error<Link to={routers.home}>To the Home page</Link>
        </p>
      )}

      <ul className={style.list}>
        {homeProduct !== null &&
          homeProduct.map((item) => (
            <li key={uuidv4()} className={style.item}>
              <ul className={style.card}>
                <li key={item.reference_image_id}>
                  <img
                    className={style.image}
                    src={item.image.url}
                    alt={item.name}
                  />
                </li>
                <li key={uuidv4()} className={style.nameTitle}>{item.name}</li>
                <li key={uuidv4()} className={style.text}>{item.bred_for}</li>
                <li key={uuidv4()} className={style.text}>{item.breed_group}</li>
              </ul>
            </li>
          ))}
      </ul>

      <button
        type="button"
        className={listItem === 3 ? style.buttonFor3 : style.buttonFor8}
        onClick={() => setPage((prev) => prev + 1)}
      >
        NEXT
      </button>
    </div>
  );
}
