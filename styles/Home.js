import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const Headers = styled.div`
  margin: 10px;
  ${'' /* background-color: rgb(0 0 0); */}
  color: #ffffff;
`

export const HeaderWrapper = tw(Headers)`
  bg-black
`