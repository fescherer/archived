import React from 'react';

import { Header } from '../../components/Header/Header';
import styles from './home.module.css';
import { Body } from '../../components/Body/Body';


export function Home() {


    return (

        <div className={styles.container}>
          <Header />
          <Body />

        </div>

    );
  }
  