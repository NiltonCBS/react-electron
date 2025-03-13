import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export function Home(){

    // async function handleAdd(){
    //     const response = await window.api.fetchAllCustomer();
    //     console.log(response);
    // }

    // async function handleCustomerById(){
    //     const docId = 'b7ecdf72-599a-412f-b17b-a111ae9ca5a3';
    //     const response = await window.api.fetchCustomerById(docId);
    //     console.log(response);
    // }

    // async function handleDeleteCustomer(){
    //     const docId = 'f951d3ab-6754-4e8c-97d6-d7acba360dd5';
    //     await window.api.deleteCustomer(docId);
    //     console.log('Cliente deletado com sucesso!');
    // }

    const queryClient = useQueryClient();
    
    const { data, isFetching } = useQuery({queryKey: ['customers'], queryFn: async () => {
        const response = await window.api.fetchAllCustomer();
        return response;
    }});

    return(
        <div className='flex-1 flex flex-col py-12 text-white'>
            <div className='px-10'>
                <h1 className='text-white text-2xl lg:text-3xl font-semibold mb-4'>
                    Todos Clientes
                </h1>
            </div>
            <section className='flex flex-col gap-6 w-full h-screen overflow-y-auto px-10 pb-[200px]'>
                {!isFetching && data?.length === 0 && (
                    <p className='text-gray-300'>Nenhum cliente cadastrado...</p>
                )}
                {data?.map((customer) => (
                    <Link
                        to={`/customer/${customer._id}`}
                        key={customer._id}
                        className='bg-gray-800 px-4 py-3 rounded'
                     >
                        <p className='mb-2 font-semibold text-lg'>{customer.name}</p>
                        <p><span className='font-semibold'>Email: </span>{customer.email}</p>
                        {customer.phone && (
                            <p>
                                <span className='font-semibold'>Telefone: </span>{customer.phone}
                            </p>
                        )}
                    </Link>
                ))}
            </section>
        </div>
    )
}