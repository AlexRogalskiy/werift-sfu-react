/******************************************************************************************
 * Repository: https://github.com/kolserdav/werift-sfu-react.git
 * File name: index.tsx
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: MIT
 * License text: See in LICENSE file
 * Copyright: kolserdav, All rights reserved (c)
 * Create Date: Wed Nov 23 2022 15:23:26 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import React, { useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Home() {
  const href = useMemo(() => `/room/${new Date().getTime()}?uid=${new Date().getTime() + 1}`, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={href}>
        <button type="button">Create room</button>
      </Link>
    </div>
  );
}

export default Home;
