import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div>
        <p className={styles.info}>Follow us so that you don't miss the best promotions and information about new products:</p>
        </div>
        <div className={styles.socialMedia}>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
      </div>
      <div className={styles.box}>
        <p> Copyright &copy; Soap Manufactory 2022</p>
      </div>
    </div>
    
  );
};

export default Footer;