import React from "react"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';


// import InventoryIcon from '@material-ui/icons/InventoryIcon';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import logo from "../../assets/img/logo.svg"
import 
{ 
    StyledUl, 
    HeaderContainer,
    StyledLi, 
    StyledA,
    StyledLogo

} from "./styled"


const Header = () => {

    return (
        <HeaderContainer>
            <StyledLogo>
                <img src={logo}/>
            </StyledLogo>

            <StyledUl>
                <StyledLi> 
                    Categoria 
                    <ArrowDropDownOutlinedIcon/>
                </StyledLi>
                
                <StyledLi>
                    <StyledA href="#"> Torne-se Vendedor </StyledA>
                </StyledLi>

                <StyledLi>
                    <StyledA href="#"> Ajuda</StyledA>
                </StyledLi>

                <StyledLi>
                    <Inventory2OutlinedIcon/>
                    <StyledA href="#">Meus pedidos</StyledA>
                </StyledLi>

                <StyledLi>
                    <PersonOutlinedIcon/>
                    <StyledA href="#">Meu perfil</StyledA>
                </StyledLi>

                <StyledLi>
                    <ShoppingCartOutlinedIcon/>
                    <StyledA href="#">Carrinho</StyledA>
                </StyledLi>
            </StyledUl>
        </HeaderContainer>
      );
    };
  

    export default Header