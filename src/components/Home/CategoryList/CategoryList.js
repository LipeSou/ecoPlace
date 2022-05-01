import React from 'react'
import Card from '../Card/Card';
import { CategoryContainer, CardsContainer } from './styled'
import { CategoriasDados } from './data'

const CategoryList = () => {
    console.log('list', CategoriasDados)
    return (
        <CategoryContainer >
            <CardsContainer>
                {CategoriasDados.map(categoria => {
                    return <Card categoria={categoria} key={categoria.title}/>
                    }) }
            </ CardsContainer>
        </CategoryContainer>
    )
}

export default CategoryList;