import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 12.2% 1fr 12.2%;
    background-color: #f6fafb;
`

export const CardProductContainer = styled.div`
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.30);
    border-radius: 15px;
    grid-column-start: 2;
    background-color: #ffffff;
    margin: 20px 0;
    padding: 40px;
`



export const BuySucessContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`

export const OrderDataContainer = styled.div`
    display: flex;
`

export const BuyInfo = styled.div`
    width: 65%;
`

export const FontBold = styled.span`
    font-weight: bold;
`

export const FontBoldP = styled.p`
    font-weight: bold;
`
export const CardProductCart = styled.div`
    border: 1px solid #059CFA;
    width: 100%;
    height: 220px;
    display: grid;
    grid-template-columns: 1fr 30% 1fr 1fr;
    align-items: center;
    padding-left: 20px;
    margin-top: 30px;
    border-radius: 15px;
`
export const ValorContainer = styled.div`
    grid-column-start: 4;
    justify-self: end;
    margin-right: 30px;
`

export const CartButton = styled.div`
    padding: 12px 0;
    width: 250px;
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

export const TrackOrderContainer = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
`
export const MoreProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`