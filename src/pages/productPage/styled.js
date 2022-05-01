import styled from 'styled-components'



export const Container = styled.div`
display: grid;
grid-template-columns: 12.2% 1fr 12.2%;
background-color: #f6fafb;
`

export const CardProductContainer = styled.div`
box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.30);
border-radius: 15px;;
grid-column-start: 2;
background-color: #ffffff;
margin: 20px 0;
`

export const MoreProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: 15vw;
`

export const DisplayProducts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px;
`