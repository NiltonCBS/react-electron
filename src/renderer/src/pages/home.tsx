import { Link } from 'react-router-dom'

export function Home(){
    return(
        <div>
            <h1>Página HOME!!</h1>
            <Link to='/create'>Ir para página create</Link>
        </div>
    )
}