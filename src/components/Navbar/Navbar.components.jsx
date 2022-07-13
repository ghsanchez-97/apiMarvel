// Import react
import { memo } from 'react'
// Import react router dom
import { Link } from 'react-router-dom'

const Navbar = (props) => { 
    return(
        <nav>
           <ul>
           <Link to="/">Inicio</Link>
            <Link to="/characters">Personajes</Link>
            <Link to="/comics">Comics</Link>
            <Link to="/craetor">Creadores</Link>
            <Link to="/events">Eventos</Link>
            <Link to="/series">Series</Link>
            <Link to="/stories">Historias</Link>
           </ul>
        </nav>
    )
}

export default memo(Navbar)