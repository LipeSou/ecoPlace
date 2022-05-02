import React from "react"
import { useNavigate } from "react-router-dom"
import heartImg from "../../assets/img/heart.png"
import star from "../../assets/img/star.png"
import startborder from "../../assets/img/starborder.png"
import {  goToProductListProductPage } from "../../routes/cordinator"
import { 
    MainContainer,
    Rating,
    HeartContainer,
    StyledCode,
    Price,
    StyledTitle,
    ProductImage,
 } from "./styled"

export const ProductCard = ({product, listPage}) => {
    const styledWidth = listPage ? '65%' : '30%'
    const navigate = useNavigate()


    return (
        product && (
            <MainContainer onClick={() => goToProductListProductPage(navigate)} style={{width: `${styledWidth}`}}>
                <HeartContainer>
                    <img src={heartImg}/>
                </HeartContainer>

                <ProductImage src={product.img}/>
                <StyledTitle>{product.title}</StyledTitle>
                <Rating>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={startborder}/>
                </Rating>
                <StyledCode>Código: {product.code}</StyledCode>
                <Price>R$ {product.valor}0</Price>
            </MainContainer>
        )
    )
}

export default ProductCard