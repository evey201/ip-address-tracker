import {
    CardContainer,
    Title,
    Description,
} from './infoCard.styled'

export const InfoCard = ({ title, description }) => {
    return (
        <>
            <CardContainer>
                <Title>{title?.toUpperCase()}</Title>
                <Description>{description}</Description>
            </CardContainer>
        </>
    )
}
