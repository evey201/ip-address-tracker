import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const BackgroundWrapper = styled.div`
    height: 150px;
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('/static/pattern-bg.png') center/cover no-repeat;
    position: relative;
`

export const Title = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 10px;
`

export const SearchInputWrapper = styled.div`
    width: 50%;
    max-width: 50%;
    margin-bottom: 20px;
`
export const InfoCardWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 100%;
    row-gap: 20px;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 10px;
    ${'' /* position: absolute; */}
    bottom: -80px;
    z-index: 5;
    left: 16px;
    right: 16px;

    @media (min-width: 768px) {
        max-width: 89%;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: max-content;
        
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: max-content;
        row-gap: unset;
        bottom: -90px;
    }
`
export const MapContainer = styled.div`
  ${'' /* height: 100%; */}
`