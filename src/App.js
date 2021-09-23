import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routers from './routers';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path={routers.home} exact component={HomePage} />
        <Route path={routers.product} component={ProductPage} />
      </Switch>
    </Layout>
  );
}
