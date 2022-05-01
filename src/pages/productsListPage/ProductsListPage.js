import React from "react"
import rightarrow from "../../assets/img/right-arrow.png"
import sadface from "../../assets/img/sadface.png"
import ArrowDropDownOutlined from '@material-ui/icons/ArrowDropDownOutlined';
import { 
    StyledText,
    StyledInput, 
    StyledPathInfo, 
    MainContainer,
    StyledsearchInfo,
    FilterTitle,
    FilterContainer,
    SelectContainer,
    SearchMainContainer,
    NotFound,
    StyledError,
    NotFoundItem, 
    Products
} from "./styled"

const productListPage = () => {
    return (
        <MainContainer>
            <div>
                <StyledInput/>
                <StyledPathInfo>
                    <StyledText> home </StyledText> <img src={rightarrow}/> <StyledText> Busca por: testando alguma coisa </StyledText>
                </StyledPathInfo>
                <StyledsearchInfo> Você pesquisou por: testando </StyledsearchInfo>
                <SearchMainContainer>
                    <FilterContainer>
                        <FilterTitle>Filtros</FilterTitle>
                        <SelectContainer>
                            <p>Ordenar por</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                        <SelectContainer>
                            <p>Ofertas</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                        <SelectContainer>
                            <p>Fretes Gratis</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                        <SelectContainer>
                            <p>Avaliações</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                        <SelectContainer>
                            <p>Selos</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                    </FilterContainer>

                    <Products>
                        
                    </Products>

                    <NotFound>
                            <img src={sadface}/>
                            <StyledError>Desculpe mas nao encontramos nenhum resultado para</StyledError>
                            <NotFoundItem>termo pesquisado</NotFoundItem>
                    </NotFound>

                </SearchMainContainer>
            </div>
        </MainContainer>
    )
}

export default productListPage