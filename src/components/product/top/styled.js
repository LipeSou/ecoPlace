import styled from 'styled-components'


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 30px;
`

export const ImgCard = styled.div`
`

export const DescCard = styled.div`
`
export const CartCard = styled.div`
    border: 1px solid #059CFA;
    width: 70%;
    display:flex;
    flex-direction: column;
    padding-left: 20px;
    margin-left: 30px;
    border-radius: 15px;

`

export const Imagem = styled.img`
    width: 95%;
`

export const DivSpacing = styled.div`
    margin-top: 10px;
`

export const Input = styled.input`
    width: 80%;
    padding: 8px;
    border-radius: 8px;
`


export const CartButton = styled.div`
    padding: 12px 0;
    width: 90%;
    background-color: #00A0FF;
    border-radius: 15px;
    transition: 0.6s;
    cursor: pointer;
    color: white;
    font-size: 16px;
    text-align: center;
    :hover{
        background-color: #5BC2FF;
    }
    :active{
        background-color: #0C6CA6;
    }
`

export const ClickButton = styled.button`
    padding: 12px 0;
    width: 90%;
    background-color: #2BDE73;
    border-radius: 15px;
    transition: 0.6s;
    cursor: pointer;
    color: white;
    font-size: 16px;
    margin-bottom: 15px;
    border: none;
    :hover{
        background-color: #5EC788;
    }
    :active{
        background-color: #097936;
    }
`