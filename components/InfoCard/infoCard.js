import {
    OverallContainer,
    CardContainer,
    Title,
    Description
} from './infoCard.styled'

export const InfoCard = ({ title, description }) => {
    return ( 
        <>
            <OverallContainer>
                <CardContainer>
                    <Title>{title?.toUpperCase() || 'Here'}</Title>
                    <Description>{description || 'Broeoo'}</Description>
                </CardContainer>
                <CardContainer>
                    <Title>{title?.toUpperCase() || 'Here'}</Title>
                    <Description>{description || 'Broeoo'}</Description>
                </CardContainer>
                <CardContainer>
                    <Title>{title?.toUpperCase() || 'Here'}</Title>
                    <Description>{description || 'Broeoo'}</Description>
                </CardContainer>
                <CardContainer>
                    <Title>{title?.toUpperCase() || 'Here'}</Title>
                    <Description>{description || 'Broeoo'}</Description>
                </CardContainer>
            </OverallContainer>
        </>
    );
}