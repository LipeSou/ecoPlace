import React from 'react'
import { 
    Container, 
    Datasheet,
    DescCard,
    CartCard,
    TitleDesc, 
    SeloContainer,
    Image,
} from './styled';
import LogoGbc from '../../../assets/img/gbc_logo-01 1.png'
import Avaliacoes from '../../../assets/img/avaliações.png'


export const Bottom = ({product}) => {

    return (
        <Container>
            <Datasheet>
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
            </Datasheet>
            <DescCard>
                <Image src={Avaliacoes} />
            </DescCard>
            <CartCard>
                <h4>Selos de certificação</h4>
                <SeloContainer>
                    <img src={LogoGbc} />
                    <p style={{marginLeft: '15px'}}>Green Building Brasil</p>
                </SeloContainer>
            </CartCard>
        </Container>
    )
}

export default Bottom;