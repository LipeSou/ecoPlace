import React from "react"
import styled from 'styled-components'
import Top from "../../components/product/top/Top"
import { ProdutosDados } from "../../data"

const Container = styled.div`
    display: grid;
    grid-template-columns: 12.2% 1fr 12.2%;
    background-color: #f6fafb;
`

const CardProductContainer = styled.div`
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.30);
    border-radius: 15px;;
    grid-column-start: 2;
    background-color: #ffffff;
    margin: 20px 0;
`


const productPage = () => {
    const codeId = '1125486';

    const product = ProdutosDados.find(p => p.code === codeId)

    console.log('produto', product)

    return (
        <Container>
            <CardProductContainer>
                <Top product={product} />

            </CardProductContainer>           
        </Container>
       
    )
}

export default productPage