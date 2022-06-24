import styled from 'styled-components'

export const OverallContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 100%;
    row-gap: 20px;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 10px;
    position: absolute;
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

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;

    @media (min-width: 1024px) {
        align-items: flex-start;

        & + div {
            border-left: 1px solid lightgrey;
        }
    }
`

export const Title = styled.span`
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--color-dark-gray);
  font-weight: 500;
`

export const Description = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 27px;
  }
`
