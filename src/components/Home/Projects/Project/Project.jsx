export function Project({ project }) {
    return (
        <div
            className={`group relative z-2 flex flex-col gap-3 alig-items-center snap-center snap-mandatory first:ms-4 md:first:ms-10 last:me-4 md:last:me-10`}
        >
            <div 
                className='absolute z-3 w-[65vw]  md:w-75 h-20 md:h-20 top-[-40px] left-[50%] translate-x-[-50%] md:opacity-0 group-hover:md:opacity-100 transition-opacity ease-in-out duration-400 bg-whitep-500 text-blackp-500 p-3 rounded-xl rounded-bl-none shadow-md'
            >
                <h4 className='text-sm font-bold leading-none'>Main tools:</h4>
                <p className='text-sm font-thin'>
                    {project.technologies}
                </p>
            </div>
            <div className='relative z-1 grid grid-cols-1 grid-rows-1 w-[80vw] h-120 md:w-95 md:h-125 rounded-[10px] bg-whitep-500 text-blackp-500'>
                <img
                    className={`absolute row-span-full z-1 w-full h-full object-cover object-center rounded-[10px] grayscale group-hover:md:grayscale-0 transition-[filter] duration-400 ease-in-out`}
                    loading='lazy'
                    alt={project.image.alt}
                    width={380}
                    height={500}
                    src={project.image.url }
                />
                <div className='absolute md:grid md:grid-cols-1 md:grid-rows-[30px_0px] group-hover:md:grid-rows-[20px_80px] place-self-end row-span-full z-2 mb-20 md:mb-10 md:m-10 mx-6 overflow-hidden md:transition-[grid-template-rows] md:ease-in-out md:duration-700 gap-2'>
                    <h3 className='text-lg font-bold'>{project.name}</h3>
                    <p className='text-md font-thin leading-5'>
                        {project.description}
                    </p>
                </div>
            </div>
            <div className='relative bottom-20 z-2 flex gap-2 justify-center items-center w-full md:static'>
                <a
                    href={project.repo}
                    className='w-32 text-center text-sm px-4 py-3 rounded-[10px] text-whitep-500 bg-blackp-500 md:text-blackp-500 md:bg-whitep-500 hover:bg-orangep-500 ease-in-out duration-200'
                >
                    Repository
                </a>
                <a
                    href={project.website}
                    target='_blank'
                    rel='noopener'
                    className='w-32 text-center text-sm px-4 py-3 rounded-[10px] text-whitep-500 bg-blackp-500 md:text-blackp-500 md:bg-whitep-500 hover:bg-orangep-500 ease-in-out duration-200'
                >
                    Website
                </a>
            </div>
        </div>
    );
}
