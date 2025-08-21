import { Asterisk } from '@app/components/shared/svg/Asterisk';
import { github, linkedin, email } from './contact.utils';
import { Container } from '@app/components/shared/Container/Container';
import ContactMethod from './ContactMethod/ContactMethod';
export function Contact() {
    return (
        <Container
            type='section'
            background='bg-blackp-500'
            id='contact'
            className='text-whitep-500 flex flex-col justify-center items-center relative overflow-hidden py-5 gap-5 px-4 md:px-10'
        >
            <div className='flex flex-col gap-2 w-full'>
                <h2 className='text-lg lg:text-3xl font-bold'>Contact</h2>
                <p className='block text-md md:text-md font-light text-balance'>
                    You can contact me via LinkedIn, Github or send <br /> me an
                    email. <strong>I hope to hear from you soon!</strong>
                </p>
            </div>
            <div className='w-full flex flex-col md:flex-row-reverse md:justify-between md:items-start gap-10'>

                <div className='flex md:flex-col gap-1 w-full justify-end items-end'>
                    <div className='flex gap-1'>
                        <div className='flex mr-10 md:mr-95'>
                            <img
                                className='w-full h-full'
                                src={'/svg/menorque-white.svg'}
                                alt={''}
                                loading='lazy'
                                width={76}
                                height={76}
                            />
                        </div>
                        <ContactMethod contactMethod={github} />
                        <div className='hidden md:block md:w-19 md:h-19 bg-whitep-500'></div>
                    </div>
                    <div className='flex gap-1'>
                        <ContactMethod contactMethod={linkedin} rounded={true} />
                        <ContactMethod contactMethod={email} />
                        <div className='hidden md:flex md:gap-2 md:ml-15'>
                            <img
                                className='rotate-180 w-full h-full'
                                src={'/svg/slash-white.svg'}
                                alt={''}
                                loading='lazy'
                                width={76}
                                height={76}
                            />
                            <img
                                className='rotate-180 w-full h-full'
                                src={'/svg/menorque-white.svg'}
                                alt={''}
                                loading='lazy'
                                width={76}
                                height={76}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 justify-center items-center text-2xl font-bold'>
                    <Asterisk /> BG.
                </div>
            </div>
        </Container>
    );
}
