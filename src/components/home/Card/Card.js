import React from 'react'
import { CardContainer, Title, Imagem } from './styled';
import { useNavigate } from "react-router-dom"
import { goToProductListPage } from '../../../routes/cordinator';

export const Card = (props) => {
    const {categoria}= props
    const navigate = useNavigate()
        
    return (
        <CardContainer
        onClick={ () => goToProductListPage(navigate)}>
            <Imagem src={categoria.img} />
            <Title>{categoria.title}</Title>
        </CardContainer>
    )
}


export default Card;