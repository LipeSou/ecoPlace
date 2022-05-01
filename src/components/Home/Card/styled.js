import styled from 'styled-components'

export const CardContainer = styled.div`
    cursor: pointer;
    width: 20rem;
    height: 120px;
    background-color: #00A0FF;
    border-radius: 15px;
    transition: 0.6s;
    :hover{
        background-color: #5BC2FF;
    }
    :active{
        background-color: #0C6CA6;
    }
`

export const Imagem = styled.img`
    margin: 15px 0 0 30px;
`

export const Title = styled.p`
    color: white;
    font-size: 18px;
    margin: 20px 0 20px 25px;
`