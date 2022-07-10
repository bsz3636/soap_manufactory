import React from 'react';

import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import { getHairProducts } from '../../../redux/productsRedux';
import ProductBox from '../../features/ProductBox/ProductBox';


import styles from './HairProducts.module.scss';

const HairProducts = () => {

  const products = useSelector(state => getHairProducts(state));

  return (

    <div className={styles.root}>
      <Container>
        <div className={styles.text}>
          <h3>The Best All Natural Soap Bars & Solid Shampoo Bars</h3>
          <p>We sell the best natural soaps and bar shampoos, all of them are PALM OIL, SULPHATES, PARABENS and PLASTIC free.</p>
        </div>
        <div className={styles.product}>
          {products.map(product => <ProductBox key={product._id} product = {product}/>)}
        </div>
      </Container>
    </div>
  )
};

export default HairProducts;