import React from 'react'
import Heart from '../../../assets/img/heart_24px.png'
import { 
    Container, 
    ImgCard,
    DescCard,
    CartCard,
    DivSpacing,
    ClickButton,
    CartButton,
    Input,
    Imagem,
} from './styled';


export const Top = ({product}) => {

    return (
        <Container>
            <ImgCard>
                <Imagem src={product.img} />
            </ImgCard>
            <DescCard>
                <p style={{fontSize: "20px"}}>{product.title}</p>
                <p style={{fontSize: "12px", marginTop: '5px'}}>Código: {product.code}</p>
                <br />
                <h4>
                  Descrição
                </h4>
                <p style={{fontSize: "14px", marginTop: '5px'}}>{product.desc}</p>
            </DescCard>
            <CartCard>
                <DivSpacing>
                    
                        <h1 style={{display: 'inline'}}>R$ {product.valor}0</h1>
                        <img style={{padding: '0 0 15px 35px',}} src={Heart} />
                </DivSpacing>
                <DivSpacing>
                    <p>Vendido por</p>
                    <p style={{color: "#059CFA"}}>Madeireira Bosques</p>
                </DivSpacing>
                <DivSpacing>
                <label>
                    Calcule seu frete:
                    <Input type="text" name="name" placeholder="Insira seu CEP"/>
                </label>
                </DivSpacing>
                <DivSpacing>
                    <p>Quantidade</p>
                </DivSpacing>
                <DivSpacing>
                    <CartButton>Adicionar ao carrinho</CartButton>
                </DivSpacing>
                <DivSpacing>
                    <ClickButton>Compra com um clique</ClickButton>
                </DivSpacing>
            </CartCard>
        </Container>
    )
}

export default Top;