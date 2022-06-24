import React from 'react'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { 
  BackgroundWrapper, 
  Wrapper, 
  Title, 
  SearchInputWrapper,
  InfoCardWrapper
} from '../styles/Home'
import { Search, InfoCard } from '../components'

const data = [
    {
        id: 1,
        location: 'New jersey',
        IPAddress: '192.258.264.101',
        timezone: 'UTC-05:00',
        isp: 'spaceX',
    },
    {
        id: 1,
        location: 'jersey',
        IPAddress: '192.258.264.101',
        timezone: 'UTC-05:00',
        isp: 'spaceXx',
    },
    {
        id: 1,
        location: 'Naw jersey',
        IPAddress: '192.258.264.101',
        timezone: 'UTC-05:00',
        isp: 'spaceXe',
    },
    {
        id: 1,
        location: 'New jerseys',
        IPAddress: '192.258.264.101',
        timezone: 'UTC-05:00',
        isp: 'spaceXdf',
    },
]
console.log(data)

export default function Home() {
    return (
        <>
            <Head>
                <title>IP address tracker</title>
                <link rel="icon" href="/favicons.png" />
            </Head>

            <Wrapper>
                <BackgroundWrapper>
                  <Title>
                    IP Address Tracker
                  </Title>
                  <SearchInputWrapper>
                    <Search />
                  </SearchInputWrapper>
                  <InfoCardWrapper>
                    <InfoCard />
                  </InfoCardWrapper>
                </BackgroundWrapper>
            </Wrapper>
        </>
    )
}
