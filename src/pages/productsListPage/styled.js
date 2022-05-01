import styled from "styled-components"
import InputSearch from "../../components/InputSearch/InputSearch"

export const MainContainer= styled.div`
    height: 84vh;
    display: grid;
    grid-template-columns: 12.2%  1fr 12.2%;
    justify-content: space-between;
    > div {
        grid-column-start: 2;
    }
`

export const StyledText= styled.span`
color: #00A0FF;
font-weight: 400;
font-size: 14px;
margin: 15px 0;
`
export const StyledInput = styled(InputSearch)`
  grid-column-start: 2;
`

export const SelectContainer = styled.div`
    margin: 10px 0;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 210px;
    height: 54px;
    background-color: #00A0FF;
    border-radius: 15px;
    transition: 0.6s;
    cursor: pointer;
    >p {
        color: #ffffff;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-right: 40px;
    }
    :hover{
        background-color: #5BC2FF;
    }
    :active{
        background-color: #0C6CA6;
    }
`


export const StyledPathInfo = styled.div`
align-items: center;
padding: 20px, 0;
display: flex;
justify-content: space-around;
width: 30%;
`

export const StyledsearchInfo= styled.span`
font-weight: 400;
font-size: 28px;
margin: 15px 0;
line-height: 36px;
`

export const NotFoundItem = styled.span`
font-weight: 400;
font-size: 24px;
line-height: 36px;
`
export const StyledError = styled.span`
font-weight: 700;
font-size: 24px;
line-height: 36px;
`

export const FilterContainer = styled.div`

margin-top: 20px;
display: flex;
align-items: center;
flex-direction: column;
width: 264px;
height: 391px;
border: 2px solid #059CFA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;

`

export const FilterTitle = styled.span`
font-size: 18px;
font-weight: 700;
margin: 10px 0 0 20px ;
align-self: flex-start;

`
export const StiledSelect = styled.select`
background-color:#059CFA;
border-radius: 5px;
`

export const SearchMainContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`

export const NotFound = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
align-items: center;
`


