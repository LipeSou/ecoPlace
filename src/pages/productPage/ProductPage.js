import React from "react"
import { ProdutosDados } from "../../data"
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 12.2% 1fr 12.2%;
    background-color: #f6fafb;
`

const CardProductContainer = styled.div`
    border: 1px solid #0F2105;
    border-radius: 15px;;
    grid-column-start: 2;
    background-color: #ffffff;
    margin: 20px 0;
`



const productPage = () => {

    return (
        <Container>
            <CardProductContainer>
                {ProdutosDados.map(product => {
                    return <p key={product.codigo}>{product.title}</p>
                })}
            </CardProductContainer>
        </Container>
       
    )
}

export default productPage