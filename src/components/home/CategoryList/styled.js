import styled from 'styled-components'

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: 12.2% 1fr 12.2%;
    background-color: #f6fafb;
`

export const CardsContainer = styled.div`
    grid-column-start: 2;
    margin: 35px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 30px;
`
