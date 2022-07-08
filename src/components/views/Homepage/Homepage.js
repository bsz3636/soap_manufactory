import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Homepage.module.scss';
import Baner from '../Homepage/Banner/Banner';
import Opinions from '../Homepage/Opinions/Opinions';

const Homepage = () => {
  return (
    <div className={styles.root}>
      <Baner/>
      <Container> 
        <div className={styles.inner}>
          <div className={styles.box}>
            <a href='/soaps/face'><h3 className={styles.link_text}>Face soaps</h3></a>
            <p>Natural soap is a cosmetic with excellent washing and care properties. Unlike its chemical counterparts, it is perfect for cleansing the face, even very sensitive or problematic skin.</p>
            <div className={styles.image_box}>
              <img src="/images/face_soap.jpg" alt="a woman washes her face with soap"/>
            </div>
          </div>
          <div className={styles.box}>
            <a href='/soaps/body'><h3 className={styles.link_text}>Body soaps</h3></a>
            <p>Natural soaps are free from ingredients that can irritate and dry the skin. They do not violate the lipid barrier, therefore the epidermis becomes velvety soft to the touch after using them.</p>
            <div className={styles.image_box}>
              <img src="/images/body_soap.jpg" alt="a woman washes the body with soap"/>
            </div>
          </div>
          <div className={styles.box}>
            <a href='/soaps/hair'><h3 className={styles.link_text}>Hair soaps</h3></a>
            <p>Natural hair soap is an excellent alternative to hair shampoos. It has a natural composition based on plant ingredients of the highest quality. Hair soap does not contain artificial preservatives or irritants.</p>
            <div className={styles.image_box}>
              <img src="/images/hair_soap.jpg" alt="a woman washes the hair with soap"/>
            </div>
          </div>
        </div>
        <Opinions/>
      </Container>
    </div>
  );
};

export default Homepage;