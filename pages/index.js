import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import {
    BackgroundWrapper,
    Wrapper,
    Title,
    SearchInputWrapper,
    InfoCardWrapper,
    MapContainer,
} from '../styles/Home'
import fetchData from '../utils/fetch'
import { Search, InfoCard, MapComponent } from '../components'
import { LocationInfos } from '../constants/locationInfo'

const Home = ({ geolocation }) => {
    const [searchValue, setSearchValue] = useState('')
    const [locationInfo, setLocationInfo] = useState({
        ip: '',
        location: '',
        timezone: '',
        isp: '',
        lat: 0,
        lng: 0,
    })
    const handleGeolocation = useCallback((geolocationData) => {
        const {
            latitude: lat,
            longitude: lng,
            ip,
            country,
            city,
            zip_code: zip,
            time_zone: timezone,
            asn_org: isp,
        } = geolocationData
        const location = `${city}, ${country}, ${zip}`
        // console.log(locationInfo)
        console.log('geolocationData::', geolocationData)
        setLocationInfo({
            ip,
            location,
            timezone,
            isp,
            lat,
            lng,
        })
    }, [])

    const handleSearch = async () => {
        const geolocation = await fetchData(
            `/api/geolocation?ip=${searchValue}`
        )
        handleGeolocation(geolocation)
    }

    useEffect(() => {
        if (geolocation) {
            handleGeolocation(geolocation)
            console.log('home::', geolocation)
            // console.log('locationInfo::', locationInfo)
        }
    }, [geolocation, handleGeolocation])

    return (
        <>
            <Head>
                <title>IP address tracker</title>
                <link rel="icon" href="/favicons.png" />
            </Head>

            <Wrapper>
                <BackgroundWrapper>
                    <Title>IP Address Tracker</Title>
                    <SearchInputWrapper>
                        <Search value={searchValue} onChange={setSearchValue} onSearch={handleSearch} />
                    </SearchInputWrapper>
                    <InfoCardWrapper>
                      {LocationInfos.map(({title, key}) => (
                        <InfoCard 
                          key={title}
                          title={title}
                          description={locationInfo[key]}
                        />
                      ))}
                    </InfoCardWrapper>
                </BackgroundWrapper>
                <MapContainer>
                    <MapComponent
                        position={{
                            lat: locationInfo.lat,
                            lng: locationInfo.lng,
                        }}
                    />
                </MapContainer>
            </Wrapper>
        </>
    )
}

export async function getStaticProps() {
  const geolocation = await fetchData('https://ifconfig.co/json')
//   console.log(geolocation)
  return {
    props: {
      geolocation,
    },
  }
}

export default Home
