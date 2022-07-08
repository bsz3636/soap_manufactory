/* eslint-disable no-lone-blocks */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Banner.module.scss';


const Banner = () => {
  return (
    <Carousel controls={false} touch={true} fade={true}>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="/images/soaps1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.text}>All products are made exclusively by hand,<br/> which makes it unique</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="/images/soaps2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.text}>Our soaps are 100% natural,<br/> free from cruelty, SLS,<br/> Parabens and anything artificial</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="/images/soaps3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.text}>Our soaps will make you<br/> feel like in a SPA</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};


export default Banner;