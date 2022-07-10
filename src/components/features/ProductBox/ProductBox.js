import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ProductBox.module.scss';

import Button from '../../features/Button/Button';

const ProductBox = ({product}) => {
  const {images, name, price, _id } = product;
  
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Link className={styles.wrap} to={`/${product}/${_id}`}>
          <img src={images[0]} alt={name} />
        </Link>
        <div className={styles.box}>
          <div>
            <Button name="ADD TO CART" />
          </div>
          <div className={styles.text}>
            <p className={styles.price}><span>{price}</span> €</p>
            <Link to={`/${product}/${_id}`}>
           <p className={styles.name}>{name}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  price: PropTypes.number,
  images: PropTypes.array,
  name: PropTypes.string,
  _id: PropTypes.string
};

export default ProductBox;