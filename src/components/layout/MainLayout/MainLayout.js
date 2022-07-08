import React from 'react';
import styles from './MainLayout.module.scss';
import Header from '../Header/Header';

//import Homepage from '../../views/Homepage/Homepage';

const MainLayout = () => {
  return (
    <div className={styles.root}>
      <Header/>
    </div>
  );
};


export default MainLayout;