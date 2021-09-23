import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import style from './Layout.module.css';

const { container, layout } = style;
const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <div className={container}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
