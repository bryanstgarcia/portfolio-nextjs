import { GithubLogo } from '@app/components/shared/svg/GithubLogo';
import { LinkedinLogo } from '@app/components/shared/svg/LinkedinLogo';
import styles from './style.module.css';
import { Container } from '@app/components/shared/Container/Container';
export function Hero() {
    return (
        <Container
            id='hero'
            type='section'
            background='bg-whitep-500'
            className='relative h-[70lvh] max-h-150 text-blackp-500 bg-whitep-500 flex items-center justify-center flex-col gap-5 lg:pb-0 pb-30 sm:pb-40'
        >
            <p className='relative z-2 flex flex-col lg:flex-row lg:items-center lg:gap-4 text-center font-light'>
                <span className='text-4xl sm:text-2xl lg:text-2xl'>👋</span>
                <span className='text-lg sm:text-2xl font-extralight'>
                    my name is <strong>Bryan García</strong> and I&apos;m a{' '}
                </span>
            </p>
            <h1 className='relative z-2 flex flex-col text-5xl sm:text-6xl lg:text-7xl text-center gap-2'>
                <strong className='font-bold'>Full Stack</strong>
                <span className='font-regular tracking-widest'>Developer</span>
            </h1>
            <div className='relative z-2 flex gap-4 flex-row items-center justify-center'>
                <a href='#work' className='cursor-pointer rounded-lg px-2.5 py-2 bg-orangep-500 text-blackp-500 font-light hover:bg-black hover:text-whitep-500 transition-color ease-in-out duration-400'>
                    My work
                </a>
                <a
                    className={`rounded-sm w-10 cursor-pointer  ${styles['svg-size']}`}
                    href='https://linkedin.com/in/bryanstgarcia'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Open LinkedIn'
                >
                    <LinkedinLogo color={`#202124`} />
                </a>
                <a
                    className={`w-10 cursor-pointer  ${styles['svg-size']}`}
                    href='https://github.com/bryanstgarcia'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Open Github'
                >
                    <GithubLogo color={`#202124`} />
                </a>
            </div>
            <div className='absolute bottom-0 right-0 z-1'>
                <div className='absolute z-1 bottom-1 right-0 md:right-[20%] lg:right-[5vw] 2xl:right-[55%] size-65 md:size-85 lg:size-90  bg-gray-400 rounded-full p-5 opacity-20'></div>
                <div className='relative z-2 bottom-0 right-0 md:right-[20%] lg:right-[5vw] 2xl:right-[55%] size-65 md:size-85 lg:size-90 flex justify-center items-end'>
                    <picture>
                        <source
                            srcSet='/images/bryanstgarcia.webp'
                            media='(min-width: 1536px)'
                            loading='eager'
                            width={290}
                            height={290}
                        />
                        <source
                            srcSet='/images/bryanstgarcia.webp'
                            media='(min-width: 768px)'
                            loading='eager'
                            width={250}
                            height={250}
                        />
                        <source
                            srcSet='/images/bryanstgarcia.webp'
                            media='(min-width: 640px)'
                            loading='eager'
                            width={220}
                            height={220}
                        />
                        <source
                            srcSet='/images/bryanstgarcia.webp'
                            media='(min-width: 480px)'
                            loading='eager'
                            width={200}
                            height={200}
                        />
                        <img
                            className=''
                            alt='Bryan Garcia mimoji'
                            src='/images/bryanstgarcia.webp'
                            loading='eager'
                            width={155}
                            height={155}
                        />
                    </picture>
                </div>
            </div>
        </Container>
    );
}
