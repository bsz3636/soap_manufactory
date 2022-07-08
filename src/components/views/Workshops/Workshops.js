import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Workshops.module.scss';

const Workshops = () => {
  return (
    <div className={styles.root}>
      <Container>
      <div className={styles.left}>
      <h3 className={styles.title}>Traditional Soap Making Workshops</h3>
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
      <div className={styles.right}>
        <div>
          <p>See what we're going to do.
Day One (Soda Soap Making - Creative Techniques):

you will learn the rules and health and safety of soap making and the basic ingredients
you will learn how to prevent numerous "pitfalls" that may await you in the process
you will learn what the "trace" is about and why its type is important in making soap
you will learn advanced creative techniques that will allow you to make unique soaps that stand out in the crowd
you will learn how you can enrich your soap with additional, valuable ingredients (how to use the properties of herbs, milk, etc.)
you will learn how to give natural colors to soaps
you will learn which essential oils make sense to add to the soap and which do not
you will create soaps with two selected techniques according to my proven recipes (4 different to choose from). You decide what properties your soap should have.
Day two (secrets of creating soap recipes, taking works out of forms and joy 🙂)

you will learn about the properties of oils and butters useful in making soap and find out why it is important in the soap making process
you will learn more about the aging of soap and learn how to check its PH so that the soaps you make are safe to use
soap making mistakes and their effects - it's worth knowing to avoid
you will learn a very useful tool for creating your own soap recipes - the saponification calculator and learn how to use it
we will create a soap recipe for use at home
you will take the soap out of the molds and cut your own hand-made soap.
You will take home approx. 1 kilogram of hand-made soap, a lot of useful knowledge and unique creative skills.
The total price of the workshop is PLN 650. The workshops last 2 days (the first day - 6 hours, the second - 3 hours). Please note that the workshops are held in a small group of up to 4 people.</p>
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