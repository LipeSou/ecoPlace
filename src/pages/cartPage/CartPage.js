import React from 'react'
import { 
    BuySucessContainer, 
    CardProductContainer, 
    Container, 
    OrderDataContainer ,
    BuyInfo,
    FontBold,
    CardProductCart,
    FontBoldP,
    ValorContainer,
    CartButton,
    TrackOrderContainer,
    MoreProductsContainer,
} from './styled';
import Verified from '../../assets/img/icons8-verified-badge-96 1.png'
import { ProdutosDados } from '../../data';

export const CartPage = () => {
    const codeId = '1125486';

    const product = ProdutosDados.find(p => p.code === codeId)

    return (
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
            </CardProductContainer>        
        </Container>
    )
}

export default CartPage;