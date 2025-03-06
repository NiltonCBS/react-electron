import { Link } from 'react-router-dom'

export function Home(){

    async function handleAdd(){
        const response = await window.api.fetchUsers();
        console.log(response);
    }

    return(
        <div>
            <h1>Página HOME!!</h1>
            <Link to='/create'>Ir para página create</Link>
            <br /><br />

            <button onClick={handleAdd}>
                Buscar Usuários
            </button>
        </div>
    )
}