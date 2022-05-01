import styled from "styled-components"


export const MainContainer = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
width: 254px;
height:500px;
background: #FFFFFF;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
border-radius: 15px;
>img{
    margin: 20px
}

`
export const HeartContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    >img{
        margin: 15px 0
    }
`

export const Rating = styled.div`
padding: 16px 0;
width:100%;
display:flex;

` 
export const Price = styled.span`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 36px;
margin: 0 0 25px 0;
`


export const StyledTitle = styled.span`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.1px;
text-transform: uppercase;
margin-top: 10px;

`

export const StyledCode = styled.span`
margin-bottom: 18px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
`

export const ProductImage = styled.img`
width: 216;
height: 218;

` 