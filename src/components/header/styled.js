import styled from "styled-components";
import Inventory from '@mui/icons-material/Inventory';


export const HeaderContainer= styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 100px;
    height: 80px;
    width: 90.6vw;
    background-color: #0F2105;
`

export const StyledUl = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const StyledLi = styled.li`
    display:flex;
    align-items: center;
    float: left;
    margin: 10px;
    text-decoration: none;
    color: white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
`;

export const StyledA = styled.a`
    margin-left: 5px;
    text-align: center;
    text-decoration: none;
    color: black;
    color:white;
`;

export const InventoryStyled = styled(Inventory)`
width: 150px;
height: 22px;
`