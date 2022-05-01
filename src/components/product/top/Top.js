import React from 'react'
import { 
    Container, 
    ImgCard,
    DescCard,
    CartCard,
    TitleDesc, 
} from './styled';


export const Top = ({product}) => {

    return (
        <Container>
            <ImgCard>
                <img src={product.img} />
                <h3>Ficha Técnica</h3>
                <div>
                    <TitleDesc>Comprimento:</TitleDesc> <span>45 cm de comprimento</span>
                </div>
                <div>
                    <TitleDesc>Largura:</TitleDesc> <span>2,5 cm</span>
                </div>
                <div>
                    <TitleDesc>Espessura:</TitleDesc> <span>2 cm</span>
                </div>
                <div>
                    <TitleDesc>Quantidade:</TitleDesc> <span>50 unidades</span>
                </div>
                <div>
                    <TitleDesc>Marca:</TitleDesc> <span>Aruna</span>
                </div>
                <div>
                    <TitleDesc>Tipo de Material:</TitleDesc> <span>{product.typeMaterial}</span>
                </div>
            </ImgCard>
            <DescCard>
                <p>{product.title}</p>
            </DescCard>
            <CartCard>
                Card
            </CartCard>
        </Container>
    )
}

export default Top;