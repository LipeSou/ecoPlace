import React from "react"
import Bottom from "../../components/product/bottom/Bottom";
import Top from "../../components/product/top/Top"
import { ProdutosDados } from "../../data"
import { CardProductContainer, Container } from "./styled";


const productPage = () => {
    const codeId = '1125486';

    const product = ProdutosDados.find(p => p.code === codeId)


    return (
        <Container>
            <CardProductContainer>
                <Top product={product} />
                <Bottom product={product}/>
            </CardProductContainer>           
        </Container>
       
    )
}

export default productPage