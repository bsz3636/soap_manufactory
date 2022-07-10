import React from 'react';
import { Container } from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

import styles from './Workshops.module.scss';

const Workshops = () => {
  return (
    <div className={styles.root}>
      <Container>
      <div>
      <h2 className={styles.title}>Traditional Soap Making Workshops</h2>
      <p className={styles.text}>Have you ever wondered how to make natural bar soap? We'll show you! Find out how to make traditional bar soaps in our soap workshops.We invite you to a two-day soap workshop. Each participant works on their own equipment, which we provide. You don't need to bring anything with you except a good attitude. We provide safety and ingredients.</p>
      <h5>What you will learn in the course of practical classes:</h5>
      <ul className={styles.text}>
        <li>soap calculator - soapcalc / soapee</li>
        <li>parameters and function</li>
        <li>tools and ingredients</li>
        <li>additives and methods</li>
        <li>fragrance and color</li>
        <li>% water and proportions, how to regulate</li>
        <li>oily SF when to add</li>
        <li>fatty acids that matter</li>
        <li>necessary calculations and proportions</li>
        <li>substitution of ingredients</li>
        <li>how to prepare herbs and other additives in soap</li>
      </ul>
      </div>
      <div className={styles.box}>
        <div className={styles.wrap}>
          <h4 className={styles.titleBox}>See what we're going to do:</h4>
          <div>
            <p className={styles.day}>- THE FIRST DAY</p>
            <p className={styles.subtitle}>Soda Soap Making - Creative Techniques:</p>
            <ul>
              <li>you will learn the rules and principles of occupational health and safety for soap production and the basic ingredients</li>
              <li>you will learn how to prevent the many "pitfalls" that may await you in this process</li>
              <li>you will learn what the "trace" is about and why its type is important in soap making</li>
              <li>you will learn advanced creative techniques that will allow you to make unique soaps that stand out in the crowd</li>
              <li>you will learn how you can enrich your soap with additional, valuable ingredients (how to use the properties of herbs, milk, etc.)</li>
              <li>you will learn to give natural colors to soaps you will learn which essential oils should be added to soap and which not</li>
              <li>you will create soaps using two selected techniques according to our proven recipes (4 different to choose from). You decide what properties your soap should have</li>
            </ul>
            <p className={styles.day}>- DAY TWO</p>
            <p className={styles.subtitle}>Secrets of creating soap recipes, taking works out of molds:</p>
            <ul>
              <li>you will learn the properties of oils and butters useful in the production of soap and you will find out why it is important in the soap production process</li>
              <li>you will learn more about aging soap and learn to check its PH so that the soaps you make are safe to use</li>
              <li>soap errors and their effects - it's worth knowing to avoid them</li>
              <li>you will learn a very useful tool for creating your own soap recipes - the saponification calculator and you will learn how to use it</li>
              <li>we will create a soap recipe for home use</li>
              <li>take the soap out of the molds and cut your own handmade soap</li>
            </ul>
          </div>
        </div>
        <div>
          <p className={styles.info}>You will take home approx. 1 kilogram of handmade soap, a lot of useful knowledge and exceptional creative abilities. The total price of the workshops is <strong>350 €</strong>. The workshops last 2 days (the first day - 6 hours, the second - 3 hours). Please be advised that the workshops are held in a small group of up to 4 people. Book a soap making workshop: <FontAwesomeIcon className={styles.icon} icon={faPhone} />555 555 555</p> 
        </div>
      </div>
      <div>
        <ul className={styles.image_gallery}>
          <li className={styles.box_img}>
            <img  className={styles.image} src="/images/workshops/1.jpg" alt="cut yellow soap" />
          </li>
          <li className={styles.box_img}>
            <img className={styles.image} src="/images/workshops/2.jpg" alt="cut yellow soap" />
          </li>
          <li className={styles.box_img}>
            <img className={styles.image} src="/images/workshops/3.jpg" alt="cut yellow soap" />
          </li>
          <li className={styles.box_img}>
            <img className={styles.image} src="/images/workshops/4.jpg" alt="cut yellow soap" />
          </li>
          <li className={styles.box_img}>
            <img className={styles.image} src="/images/workshops/5.jpg" alt="cut yellow soap" />
          </li>
          <li className={styles.box_img}>
            <img className={styles.image} src="/images/workshops/6.jpg" alt="cut yellow soap" />
          </li>
          <li className={styles.box_img}>
            <img className={styles.image} src="/images/workshops/7.jpg" alt="cut yellow soap" />
          </li>
          <li className={styles.box_img}>
            <img className={styles.image} src="/images/workshops/8.jpg" alt="cut yellow soap" />
          </li>
        </ul>
        
        {/*<img className={styles.item} src="/images/workshops/1.jpg" alt="cut yellow soap"/>
        <img className={styles.item} src="/images/workshops/2.jpg" alt="cut yellow soap"/>
        <img className={styles.item} src="/images/workshops/3.jpg" alt="cut yellow soap"/>
        <img className={styles.item} src="/images/workshops/4.jpg" alt="cut yellow soap"/>
        <img className={styles.item} src="/images/workshops/5.jpg" alt="cut yellow soap"/>
        <img className={styles.item} src="/images/workshops/6.jpg" alt="cut yellow soap"/>
        <img className={styles.item} src="/images/workshops/7.jpg" alt="cut yellow soap"/>
  <img className={styles.item} src="/images/workshops/8.jpg" alt="cut yellow soap"/>*/}
        
      </div>
      </Container>
    </div>
  );
};


export default Workshops;