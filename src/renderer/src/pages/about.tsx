import { useQuery } from "@tanstack/react-query";

export function About(){
    
    const { data, isFetching } = useQuery({queryKey: ['customers'], queryFn: async () => {
        const response = await window.api.getVersionApp();
        return response;
    }});

    return(
        <div className='flex-1 flex flex-col py-12 text-white'>
            <h1 className='text-white text-2xl lg:text-3xl font-semibold mb-4'>
                Página Sobre
            </h1>

            <p>Projeto criado no Curso de Electron<b>@sujeitoprogramador</b></p>
            <p>Versão atual do projeto: {!isFetching && data && data} </p>
        </div>
    )
}