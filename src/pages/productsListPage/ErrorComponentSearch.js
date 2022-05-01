import React from 'react'
import { NotFound, NotFoundItem, StyledError } from './styled';
import sadface from "../../assets/img/sadface.png"

export const ErrorComponentSearch = () => {
    return (
        <NotFound>
                <img src={sadface}/>
                <StyledError>Desculpe mas nao encontramos nenhum resultado para</StyledError>
                <NotFoundItem>termo pesquisado</NotFoundItem>
        </NotFound>
    )
}

export default ErrorComponentSearch;