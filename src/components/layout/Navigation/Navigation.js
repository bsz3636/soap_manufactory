import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';

import styles from './Navigation.module.scss';

import Info from '../Info/Info'

const Navigation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.box_cart}>
        <Info className={styles.box_info}/>
        <Link to="/login" className={styles.wrap}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
        </Link>
        <Link to="/shoopingcart" >
          <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
        </Link>
      </div>
      <Navbar variant="light" expand="xl" className="fs-4 mt-3 mb-3 rounded">
        <Container>
          <Navbar.Brand as={NavLink} to="/"><img src="/images/logo.png" alt="Logo Soap Manufactory"/>
          </Navbar.Brand>

          <nav role="navigation" className={styles.navigation}>
            <ul>
              <li><a href="/" className={({ isActive }) => isActive? styles.active : undefined}>Home</a></li>
              <li><a href="/soaps" className={({ isActive }) => isActive? styles.active : undefined}>Soaps</a>
                <ul>
                  <li><a href="/soaps/face" className={({ isActive }) => isActive? styles.active : styles.inActive}>Face Soaps</a></li>
                  <li><a href="/soaps/body" className={({ isActive }) => isActive? styles.active : styles.inActive}>Body Soaps</a></li>
                  <li><a href="/soaps/hair" className={({ isActive }) => isActive? styles.active : styles.inActive}>Hair Soap</a></li>
                  <li><a href="/soaps" className={({ isActive }) => isActive? styles.active : styles.inActive}>All Soaps</a></li>
                </ul>
              </li>
              <li><a href="/about" className={({ isActive }) => isActive? styles.active : styles.inActive}>About</a></li>
              <li><a href="/workshops" className={({ isActive }) => isActive? styles.active : undefined}>Workshops</a></li>
            </ul>
          </nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;