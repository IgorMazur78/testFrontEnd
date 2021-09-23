import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './Header.module.css';
import routers from '../../routers';

const { logo, header, listHeader, route, routeActive } = style;

function Header() {
  return (
    <div className={header}>
      <Link to={routers.home} className={logo}>
        UKAD
      </Link>
      <ul className={listHeader}>
        <li>
          <NavLink
            exact
            to={routers.home}
            className={route}
            activeClassName={routeActive}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={route}
            exact
            to={routers.product}
            activeClassName={routeActive}
          >
            PRODUCTS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
