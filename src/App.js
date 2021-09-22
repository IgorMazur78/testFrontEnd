import React from "react";
import { Switch, Route } from "react-router-dom";
import routers from "./routers";
import Layout from "./components/Layout";
import HomePage from "./components/views/HomePage";
import ProductPage from "./components/views/ProductPage";
import style from "./styles/styleComponents.module.css"


export default function App() {
  return (
    <div className={style.container}>
      <Layout>
        <Switch>
          <Route path={routers.home} exact component={HomePage} />
          <Route path={routers.product} component={ProductPage} />
        </Switch>
      </Layout>
    </div>
  );
}
