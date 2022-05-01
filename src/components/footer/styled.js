import styled from "styled-components";

export const FooterContainer= styled.div`
    display: grid;
    grid-template-columns: 12.2%  1fr 1fr 12.2%;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: #0F2105;
    
`
export const Atendimento = styled.div`

    padding:0 0 0 6em;
    justify-content: space-between;
    display: flex;
    color:white;
    margin-left: 1.5em;
    

`

export const SocialMedias = styled.div`
    display: flex;
    padding-right: 3em;
    align-items: center;
    justify-content: space-between;
    background-color: #0F2105;
    grid-column-start: 2;
    color: white;

`

export const StyledIcons = styled.div`
    width: 26%;
    display: flex;
    justify-content: space-around;
    margin-right: 30%;
`
    
export const StyledText = styled.p`
        font-size: 14px;
        font-weight: 400;
        line-height:24px;
        font-weight: 400;

`

export const StyledP = styled.p`
    font-size: 16px;
    color:#2BDE73;
    margin:0 15px ;
`