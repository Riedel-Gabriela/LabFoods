import { useNavigate } from "react-router-dom";

import './Header.css'

import logo from '../../assets/grandma-logo.png'

export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <img src={logo} alt="Logo" className="logo-header" />
            <div className="header-bloco">
                <h1>The CookBook</h1>
                <h2>suas receitas num 'click'</h2>
                <nav>
                    <button onClick={() => navigate("/")}> Home </button>
                    <button onClick={() => navigate("/create")}> Nova Receita </button>
                    <button onClick={() => navigate(-1)}> Voltar </button>
                </nav>
            </div>
        </header>
    )
}