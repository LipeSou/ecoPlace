import React from "react"
import errorImg from "../../assets/img/ops.png"
import {Container} from "./styled"


const ErrorPage = () => {
    return (
        <Container>
            <img src={errorImg}/>
        </Container>
    )
}

export default ErrorPage
