const BaseApiProducts = 'https://api.thedogapi.com/v1/breeds';

export const getPage = (limitItem, numberPage) => {
  return fetch(`${BaseApiProducts}?limit=${limitItem}&page=${numberPage}`).then(
    res => res.json()
  );
};

export const getNextPage = (limitItem, numberPage) => {
  return fetch(
    `${BaseApiProducts}?limit=${limitItem}&page=${numberPage + 1}`
  ).then(res => res.json());
};
