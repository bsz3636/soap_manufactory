import React from 'react';
import { Container } from 'react-bootstrap';
import clsx from 'clsx';

import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.wrapper_about}>
        <p>Natural cosmetics are becoming more and more popular due to a number of benefits that their use brings. Bar soap is one of the simplest examples of an organic cosmetic that cannot be missing in any bathroom. Did you know that you can easily make them in the comfort of your home?</p>
        <div className={clsx(styles.box_img, styles.box_one)}>
          <img src="/images/soap_production/1.jpg" alt="mixing soap"/>
        </div>
        <br/><br/>
        <p>They do not contain harmful chemicals, are gentle on the skin, nourish and moisturize. It is an interesting alternative to regular liquid soap or even shower gel. Natural soap does not contain harmful detergents, chemical foaming agents or artificial dyes. Perfectly cleans and is gentle to the skin. It is made only of natural ingredients: vegetable oils, essential oils and natural dyes. Bar soap is historically the first cleaner used to remove grease and dirt. In the past, they were made only from natural ingredients. Today, stores are dominated by syndets, i.e. washing bars that contain no more than 10% of real soap. The rest are artificially produced cleansers, detergents, dyes, preservatives and fragrances that can irritate the skin, dry it out and even cause allergic reactions.</p>
        <div className={clsx(styles.box_img, styles.box_two)}>
          <img src="/images/soap_production/2.jpg" alt="cutting soap"/>
        </div>
        <br/>
        <br/>
        <p>Natural bar soap consists mainly of vegetable oils to which sodium or potassium lye is added. After production, these products must mature from several dozen days to even several months. Due to this process, they are not produced on a mass scale. Each dice therefore has its own mini-story and is one of a kind. Someone put their time, passion and knowledge into its performance.We produce soaps tailored to the needs of everyone's skin and hair - for dry and damaged strands, for problems with dandruff or baldness, for sensitive skin, but also for oily and acne-prone skin.</p>
        <div className={clsx(styles.box_img, styles.box_three)}>
          <img src="/images/soap_production/3.jpg" alt="laying soap"/>
        </div>
        <br/>
        <br/><br/>
        <br/>
        <p> We also make peeling soaps that gently massage and exfoliate the epidermis. Dice compositions are designed in such a way as to effectively fight specific problems. Thanks to this, we can count on effective operation and visible effects of care.What else distinguishes a good soap? It should lather easily, thanks to which it will adhere well to the hair and skin. This, in turn, will translate into more effective operation. The advantage of the soaps is their extremely high efficiency. Properly stored, it will last for a long time of regular use. You cannot forget about their aroma as well. Contemporary cubes can really smell amazing.</p>
        </div>
      </Container>
    </div>
  );
};


export default About;