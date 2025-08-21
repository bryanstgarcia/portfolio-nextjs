export function SkillSet({ title, children }) {
    return (
        <div className='grid grid-cols-[80px_80px_80px_80px] grid-rows-[80px_80px_80px] gap-2'>
            <div className={'flex justify-center items-center'}>
                <img
                    className='h-full w-full'
                    src='/svg/menorque.svg'
                    width='100'
                    height='100'
                    loading='lazy'
                    alt=''
                />
            </div>
            <div
                className={`flex flex-col bg-blackp-500 w-full h-full p-2 ${
                    title == 'Others'
                        ? 'rounded-full justify-center'
                        : 'justify-start'
                }`}
            >
                <h3 className='font-bold leading-none text-whitep-500 text-md'>
                    {title}
                </h3>
            </div>
            {children}
            <div className={'flex justify-center items-center  w-full h-full'}>
                <img
                    className='rotate-180 h-full w-full'
                    src='/svg/menorque.svg'
                    width='100'
                    height='100'
                    loading='lazy'
                    alt=''
                />
            </div>
        </div>
    );
}