import React from "react"
import { useNavigate  } from "react-router-dom";
import {goToErrorPage} from "../../routes/cordinator"


const HomePage = () => {
    //testando funcionamento da rota de erro.
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick=
            {
                () => {goToErrorPage(navigate)}

            }>TESTE ERRO</button>
        </div>
    )
}   



export default HomePage
