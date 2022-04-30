import React from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from "../../assets/img/logo.svg"
import 
{ 
    StyledUl, 
    HeaderContainer,
    StyledLi, 
    StyledA,
    InventoryStyled 
} from "./styled"




const Header = () => {

    return (
        <HeaderContainer>
            <div>
                <img src={logo}/>
            </div>
            <StyledUl>
                <StyledLi> 
                    Categoria 
                    <ArrowDropDownIcon/>
                </StyledLi>
                
                <StyledLi>
                    <StyledA href="#"> Torne-se Vendedor </StyledA>
                </StyledLi>

                <StyledLi>
                    <StyledA href="#"> Ajuda</StyledA>
                </StyledLi>

                <StyledLi>
                    <InventoryStyled/>
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