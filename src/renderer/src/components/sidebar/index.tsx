import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx';
import { ArrowBendDoubleUpLeft } from 'phosphor-react'
import { LinkContent } from '../link';

export function Sidebar(){
    const isMacOS = navigator.userAgent.includes('Macintosh');
    
    return(
        <Collapsible.Content
            className='bg-gray-950 flex-shrink-0 border-r border-slate-600 h-screen relative group overflow-hidden data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut'
        >
            <Collapsible.Trigger
                className={clsx(
                    'absolute w-7 right-4 z-[99] text-white hover:scale-105 duration-200 inline-flex items-center justify-center',
                    isMacOS ? 'top-[1.125rem]' : 'top-6'
                )}
            >
                <ArrowBendDoubleUpLeft 
                    size={28} 
                    weight="regular" 
                />
            </Collapsible.Trigger>

            <div className={clsx('region-drag h-14 z-0 mt-10', 
                isMacOS ? 'block' : 'hidden'
            )}>
            </div>

            <div className={clsx(
                'flex-1 flex flex-col h-full gap-8 w-[220px] transition-opacity group-data-[state=open]:opacity-100 group-data-[closed]:opacity-0 duration-200',
                !isMacOS && 'pt-6'
            )}>
                <nav className='flex mx-2 flex-col gap-8 text-slate-100'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-white font-semibold uppercase mb-2 ml-2'>
                            Menu
                        </div>
                    </div>

                    <section className='flex flex-col gap-px'>
                        <LinkContent to='/'>Clientes</LinkContent>
                        <LinkContent to='/create'>Cadastrar Clientes</LinkContent>
                        <LinkContent to='/about'>Sobre</LinkContent>
                    </section>
                </nav>
            </div>
        </Collapsible.Content>
    )
}