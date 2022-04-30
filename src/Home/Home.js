import React from "react"
import { Search } from '@material-ui/icons'
import { HeaderContainer, Input, SearchContainer } from "./styled"

const Home = () => {
    


    return (
        <HeaderContainer>
            <SearchContainer>
                <Search style={{color:'#0F2105', fontSize:24, paddingLeft:5}} />
                <Input placeholder='Pesquise por produtos'/>
            </SearchContainer>
        </HeaderContainer>
    )
}

export default Home