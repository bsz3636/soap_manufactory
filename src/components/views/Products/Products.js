import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import { getAll } from '../../../redux/productsRedux';
import ProductBox from '../../features/ProductBox/ProductBox';


import styles from './Products.module.scss';

const Products = () => {

  const products = useSelector(state => getAll(state));

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

Products.propTypes = {
  imageCarouselOne: PropTypes.string,
  imageCarouselTwo: PropTypes.string,
  imageCarouselThree: PropTypes.string,
  title: PropTypes.string,
  descripe: PropTypes.string,
  products: PropTypes.array,
  mainCategory: PropTypes.string,
  categories: PropTypes.array,
  tastes: PropTypes.array,
  changeFilters: PropTypes.func,
};

export default Products;