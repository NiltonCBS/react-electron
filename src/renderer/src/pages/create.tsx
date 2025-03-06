export function Create(){

    async function handleAddCustomer(){

        const doc = {
            name: 'Nilton Santos',
            email: 'teste@teste.com',
            phone: '11999999',
            address: 'Rua Teste, 123',
            role: 'FrontEnd',
            status: true,
        }
        
        const response = await window.api.addCustomer(doc);
        console.log(response);
    }

    return(
        <div>
            <h1>Página NOVO CLIENTE!!</h1>

            <button onClick={handleAddCustomer}>CADASTRAR</button>
        </div>
    )
}