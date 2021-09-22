import React from "react";
import { NavLink, Link } from "react-router-dom";
import routers from "../../routers";
import style from "../../styles/styleComponents.module.css"

export default function Header() {
  return (
    <div className={style.header}>
     <Link to={routers.home} className={style.logo}>UKAD</Link>
      <ul className={style.listHeader}>
  
        <li>
          <NavLink
            exact
            to={routers.home}
            className={style.route}
            activeClassName={null}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className={style.route} exact to={routers.product} activeClassName={null}>
            PRODUCTS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
