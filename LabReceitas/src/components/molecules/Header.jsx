import { useNavigate } from "react-router-dom";

import './Header.css'

export default function Header() {
    const navigate = useNavigate();
    return(
        <header>
            <h1>The CookBook</h1>
            <h2>suas receitas num click</h2>
            <nav>
                    <button onClick={() => navigate("/")}> Home </button>
                    <button onClick={() => navigate("/create")}> Criar </button>
                    <button onClick={() => navigate(-1)}> Voltar </button>
                </nav>
        </header>
    )
}