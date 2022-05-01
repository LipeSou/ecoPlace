import React from "react"
import Bottom from "../../components/product/bottom/Bottom";
import Top from "../../components/product/top/Top"
import { ProdutosDados } from "../../data"
import { CardProductContainer, Container, DisplayProducts, MoreProductsContainer } from "./styled";
import Image4 from '../../assets/img/image4.png'
import Image7 from '../../assets/img/image7.png'
import ProductCard from "../../components/productCard/ProductCard";


const productPage = () => {
    const codeId = '1125486';

    const product = ProdutosDados.find(p => p.code === codeId)
    const OutherProduct = [
        {   
            img: Image4, 
            title: '50 Ripas Maciça Pinus 45 cm x 2,5 cm x 3 cm de espessura',
            code: '1125634',
            valor: 49.90,
            desc: 'Ripas Maciça Maciça 45 cm x 2,5 cm x 2 cm de espessura oferecem qualidade, sofisticação e durabilidade em um só produto. Sua composição é 100% natural, livre de componentes que agridem o meio ambiente. Sua textura amadeirada proporciona elegância e fácil adaptação à decoração do ambiente.',
            typeMaterial: 'Maciça',
            category: 'Madeiramento',
            nota: [[5],[5],[5],[5],[5],[5],[5],[5],[5],[5],[4],[4],[4],[4],[4],[4],[4],[4],[3],[3],[3],[3]],
        },
        {   
            img: Image7, 
            title: 'Ripa Maciça Jatobá 45 cm x 2,5 cm x 2 cm de espessura',
            code: '1129876',
            valor: 29.90,
            desc: 'Ripas Maciça Jatobá 45 cm x 2,5 cm x 2 cm de espessura oferecem qualidade, sofisticação e durabilidade em um só produto. Sua composição é 100% natural, livre de componentes que agridem o meio ambiente. Sua textura amadeirada proporciona elegância e fácil adaptação à decoração do ambiente.',
            typeMaterial: 'Jatobá',
            category: 'Madeiramento',
            nota: [[5],[5],[5],[5],[5],[5],[5],[5],[5],[5],[4],[4],[4],[4],[4],[4],[4],[4],[3],[3],[3],[3]],
        },
    ]

    return (
        <Container>
            <CardProductContainer>
                <Top product={product} />
                <Bottom product={product}/>
                <MoreProductsContainer>
                    <p style={{fontSize: '24px'}}>Produtos similares a {product.title} :</p>
                </MoreProductsContainer>  
                <DisplayProducts>
                    {
                        OutherProduct.map(p => {
                            return <ProductCard key={p.code} product={p} />
                        })
                    }
                </DisplayProducts>  
            </CardProductContainer>        
        </Container>
    )
}

export default productPage