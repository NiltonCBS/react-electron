import { useQueryClient, useMutation } from '@tanstack/react-query';
import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface DataMutation{
    name: string;
    email: string;
    phone: string;
    role: string;
    address: string;
}
export function Create(){
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const andressRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const roleRef = useRef<HTMLInputElement | null>(null);

    const { isPending, mutateAsync: createCustomer} = useMutation({ mutationFn: async (data: DataMutation) => {

        await window.api.addCustomer({
            name: data.name,
            email: data.email,
            phone: data.phone,
            role: data.role,
            address: data.address,
            status: true,
        }).then((response) => {
            navigate('/');
        })
        .catch((err) => {
            console.log("Erro AO CADASTRAR: ", err)
        })
    },
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['customers']});
    }}); 

    async function handleAddCustomer(e: FormEvent){
        e.preventDefault();


        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const phone = phoneRef.current?.value;
        const role = roleRef.current?.value;
        const address = andressRef.current?.value;

        if(!name || !email || !phone || !role || !address){
            return;
        }

        await createCustomer({name, email, phone, role, address});
        
    }

    return(
        <div className='flex-1 flex flex-col py-12 px-10 gap-8 overflow-y-auto'>
            <section className="flex flex-1 flex-col items-center">
                <h1 className="text-white text-2xl lg:text-3xl font-semibold">Cadastrar Novo Cliente</h1>

                <form className="w-full max-w-96 mt-4" onSubmit={handleAddCustomer}>
                    <div>
                        <label className="text-lg">Nome:</label>
                        <input 
                            type="text"
                            placeholder="Digite o nome do cliente..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={nameRef}
                        />
                    </div>

                    <div>
                        <label className="text-lg">Endereço:</label>
                        <input 
                            type="text"
                            placeholder="Digite endereço completo..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={andressRef}
                        />
                    </div>

                    <div>
                        <label className="text-lg">Email:</label>
                        <input 
                            type="text"
                            placeholder="Digite o email..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={emailRef}
                        />
                    </div>

                    <div>
                        <label className="text-lg">Telefone:</label>
                        <input 
                            type="text"
                            placeholder="Digite o telefone..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={phoneRef}
                        />
                    </div>

                    <div>
                        <label className="text-lg">Cargo:</label>
                        <input 
                            type="text"
                            placeholder="Digite o cargo..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={roleRef}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 rounded flex items-center justify-center w-full h-9 mt-6 disabled:bg-gray-500"
                        disabled={isPending}
                    > Cadastrar</button>
                </form>
            </section>
            
        </div>
    )
}