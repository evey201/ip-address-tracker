import styled from 'styled-components'


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
