import React from 'react'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {HeaderWrapper} from '../styles/Home'
import { Search } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>IP address tracker</title>
        <link rel='icon' href='/favicons.png' />
      </Head>

      <HeaderWrapper>
        fkdnkjnok
        <Search />
      </HeaderWrapper>
    </>
  )
}
