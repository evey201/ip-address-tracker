import { useMemo } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

export const MapComponent = ({ position }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })

  const center = useMemo(() => (position), [position])
  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100vh',
        }}
        center={position}
        zoom={10}
      >
        <Marker icon="/icons/location.svg" position={center} />
      </GoogleMap>
    )
  )
}

