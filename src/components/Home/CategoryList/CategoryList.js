import React from 'react'
import Card from '../Card/Card';
import { CategoryContainer, CardsContainer } from './styled'


const CategoryList = () => {
    return (
        <CategoryContainer >
            <CardsContainer>
                <Card />
            </ CardsContainer>
        </CategoryContainer>
    )
}

export default CategoryList;