import {
    Container,
    SearchInput,
    SubmitButton
} from './search.styled'

export const Search = ({ value, onChange, onSearch  }) => {

    const handleChange = e => onChange(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('component working')
        onSearch()
    }
    return ( 
        <>
            <Container onSubmit={handleSubmit}>
                <SearchInput value={value} onChange={handleChange} placeholder='Search for any IP address or domain' />
                <SubmitButton type='submit' />
            </Container>
        </>
    );
}