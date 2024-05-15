import { Link } from "react-router-dom"

export default function NavBar() {
    return ( 
        <nav>
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="filmes">Filmes</Link></li>
                <li><Link to="sobre">Sobre</Link></li>
                <li><Link to="contato">Contato</Link></li>
            </ul>
        </nav>
    )
}