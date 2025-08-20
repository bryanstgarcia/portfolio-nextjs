export function ProjectsCounter () {
    return (
        <section 
            id='projects-counter' 
            className='p-5 px-4 lg:p-10 lg:px-10 flex justify-center gap-2 lg:gap-20 items-center bg-blackp-500'
        >
            <p className='flex flex-col lg:flex-row lg:gap-5 items-center w-50'>
                <span className='text-6xl lg:text-7xl'>20</span>
                <span className='text-center lg:text-left text-sm text-wrap'>Projects done</span>
            </p>
            <p className='flex flex-col lg:flex-row lg:gap-5 items-center w-55'>
                <span className='text-6xl lg:text-7xl'>04</span>
                <span className='text-center lg:text-left text-sm text-wrap'>Years of experience</span>
            </p>
            <p className='flex flex-col lg:flex-row lg:gap-5 items-center w-55'>
                <span className='text-6xl lg:text-7xl'>15</span>
                <span className='text-center lg:text-left text-sm text-wrap'>Collaborations with brands</span>
            </p>
        </section>
    )
}