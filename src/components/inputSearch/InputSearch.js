import React from "react"
import { Search } from '@material-ui/icons'
import { HeaderContainer, Input, SearchContainer } from "./styled"

export const InputSearch = ( {inputValue, setInputValue} ) => {

    const handleInput = (e) => {

        setInputValue(e.target.value)

    }
    
    return (
        <HeaderContainer>
            <SearchContainer>
                <Search style={{color:'#0F2105', fontSize:24, paddingLeft:5}} />
                
                <Input 
                value={inputValue}
                onChange={(e) => handleInput(e)} 
                placeholder='Pesquise por produtos'/>
            </SearchContainer>
        </HeaderContainer>
    )
}

export default InputSearch