
export function NavbarHamburguer({ isOpen, handleClick }) {

	return (
		<button
			aria-label='Menu'
			onClick={handleClick}
			className='flex flex-col justify-center items-center p-4 lg:hidden'
		>
			<span
				className={`bg-neutral-50 block transition-all origin-[35%] duration-300 ease-out 
                    h-1 w-6 rounded-sm ${
						isOpen ? 'rotate-35 translate-y-1' : '-translate-y-0.5'
					}`
                }
			></span>
			<span
				className={`bg-neutral-50 block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm my-0.5 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`
                }
			></span>
			<span
				className={`bg-neutral-50 block origin-[45%] transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm ${
						isOpen ? '-rotate-35 -translate-y-1' : 'translate-y-0.5'
					}`
                }
			></span>
		</button>
	);
}
