import React from 'react'
import { CardContainer, Title, Imagem } from './styled';

export const Card = (props) => {
    const {categoria}= props
    console.log('categoria', categoria)

    return (
        <CardContainer>
            <Imagem src={categoria.img} />
            <Title>{categoria.title}</Title>
        </CardContainer>
    )
}


export default Card;