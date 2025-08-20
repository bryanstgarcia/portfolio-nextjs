export function Skill({ skill }) {
    return (
        <div className='flex flex-col justify-center items-center bg-blackp-500 w-full h-full p-2 gap-2'>
            <img
                src={skill.imagePath}
                alt={skill.imageAlt}
                width={skill.width}
                height={skill.height}
                loading='lazy'
                className='size-10'
            />
            <p className='text-whitep-500 font-light text-[11px]'>{skill.name}</p>
        </div>
    );
}
