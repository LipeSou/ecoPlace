import React from "react"
import heartImg from "../../assets/img/heart.png"
import star from "../../assets/img/star.png"
import startborder from "../../assets/img/starborder.png"
import { 
    MainContainer,
    Rating,
    HeartContainer,
    StyledCode,
    Price,
    StyledTitle,
    ProductImage
 } from "./styled"

export const ProductCard = (product) => {
    
    return (
        <MainContainer>
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
            <Price>{product.price}</Price>
        </MainContainer>
    )
}

export default ProductCard