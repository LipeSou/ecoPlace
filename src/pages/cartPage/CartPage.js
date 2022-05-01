import React from 'react'
import { 
    BuySucessContainer, 
    CardProductContainer, 
    Container, 
    OrderDataContainer,
    BuyInfo,
    FontBold,
    CardProductCart,
    FontBoldP,
    ValorContainer,
    CartButton,
    TrackOrderContainer,
    MoreProductsContainer,
    DisplayProducts,
} from './styled';
import Verified from '../../assets/img/icons8-verified-badge-96 1.png'
import { ProdutosDados } from '../../data';
import ProductCard from '../../components/productCard/ProductCard';
import Image4 from '../../assets/img/image4.png'
import Image7 from '../../assets/img/image7.png'

export const CartPage = () => {
    const codeId = '1125486';
    
    const product = ProdutosDados.find(d => {
        return d.code === codeId
    })

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
        product && (
            <Container>
                <CardProductContainer>
                    <BuySucessContainer>
                        <img src={Verified} />
                        <h1>Compra realizada!</h1>
                    </BuySucessContainer>
                    <BuyInfo>
                        <p style={{fontSize: '18px', marginTop: '30px'}}>
                            Obrigado por comprar na ECONEXO! Seu pedido nº <FontBold>21774369</FontBold> no valor de 49,90 foi recebido. 
                            A confirmação será enviada para o e-mail <FontBold>aruna@gmail.com</FontBold>.
                        </p>
                    </BuyInfo>
                        <p style={{fontSize: '24px', marginTop: '30px'}}>
                            Confira abaixo os dados do seu pedido: 
                        </p>
                    <OrderDataContainer>
                        {
                            <CardProductCart>
                                <div>
                                    <img src={product.img} style={{height: '90%'}} />
                                </div>
                                <div style={{marginLeft: '30px'}}>
                                    <FontBoldP>{product.title}</FontBoldP>
                                    <br/>
                                    <p>Código: {product.code}</p>
                                    <br/>
                                    <p>Vendido por</p>
                                    <p style={{color: '#059CFA'}}>Madereira Bosques</p>
                                </div>
                                <ValorContainer>
                                    <span style={{fontWeight: 'bold', fontSize: '24px'}}>R$ {product.valor}0</span>
                                </ValorContainer>
                            </CardProductCart>
                        }
                    </OrderDataContainer>
                    <TrackOrderContainer>
                        <CartButton>Acompanhar pedido</CartButton>
                        <div>
                            <span style={{marginRight: '30px'}}>TOTAL</span>
                            <span style={{fontWeight: 'bold', fontSize: '24px'}}>R$ {product.valor}0</span>
                        </div>
                    </TrackOrderContainer>
                    <MoreProductsContainer>
                        <p style={{fontSize: '24px'}}>Confira estes outros produtos:</p>
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
    )
}

export default CartPage;