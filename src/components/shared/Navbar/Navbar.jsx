'use client';
import { useState } from 'react';
import Link from 'next/link';

import { NavbarHamburguer } from '@app/components/shared/NavbarHamburguer';
import { useDeviceType } from '@app/utils/hooks/deviceType';
import { LinkedinLogo } from '@app/components/shared/svg/LinkedinLogo';
import { GithubLogo } from '@app/components/shared/svg/GithubLogo';
import { MailLogo } from '@app/components/shared/svg/MailLogo';
import { Asterisk } from '@app/components/shared/svg/Asterisk';

import { navbarMobile } from './styles.js';
import styles from './style.module.css';
import { handleRedirect, handleScroll } from './utils.js';

export function Navbar() {
    const isMobile = useDeviceType();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='fixed z-3 w-full flex justify-center  bg-blackp-500'>
            <header
                className='w-full flex justify-between px-4 py-5 md:p-5 md:px-10  bg-blackp-500 max-w-400'
            >
                <div className='flex justify-center items-center'>
                    <Link
                        className='font-bold text-2xl flex items-center gap-2'
                        href='#'
                        aria-label='Ir a al parte superior'
                    >
                        <Asterisk />
                        BG.
                    </Link>
                </div>
                <nav className='flex'>
                    {isMobile && (
                        <NavbarHamburguer
                            isOpen={isOpen}
                            handleClick={handleClick}
                        />
                    )}
                    <div
                        className={`${
                            isOpen && isMobile
                                ? navbarMobile.open.join(' ')
                                : navbarMobile.closed.join(' ')
                        } transition-[grid-template-rows] duration-300 ease-out bg-blackp-500 lg:grid-rows-1 lg:static lg:w-auto lg:overflow-visible`}
                    >
                        <ul
                            className={`${
                                isOpen && isMobile
                                    ? navbarMobile.linksOpen.join(' ')
                                    : navbarMobile.linksClosed.join(' ')
                            } transition-opacity duration-400 ease-out lg:flex lg:flex-row lg:gap-x-6 lg:opacity-100 lg:relative lg:top-0 lg:bottom-0`}
                        >
                            <li
                                className={`flex items-center justify-center relative`}
                            >
                                <a
                                    className={`${styles['nav-link']} relative font-light text-base active:text-orangep-500`}
                                    onClick={handleScroll({
                                        action: isMobile ? handleClick : () => {},
                                    })}
                                    href='/#hero'
                                >
                                    Home
                                </a>
                            </li>
                            <li className='flex items-center justify-center relative'>
                                <a
                                    className={`${styles['nav-link']} relative font-light text-base active:text-orangep-500`}
                                    onClick={handleScroll({
                                        action: isMobile ? handleClick : () => {},
                                    })}
                                    href='/#about'
                                >
                                    About
                                </a>
                            </li>
                            <li className='flex items-center justify-center relative'>
                                <a
                                    className={`${styles['nav-link']} relative font-light text-base active:text-orangep-500`}
                                    onClick={handleScroll({ action: handleClick })}
                                    href='/#skills'
                                >
                                    Skills
                                </a>
                            </li>
                            <li className='flex items-center justify-center relative'>
                                <a
                                    className={`${styles['nav-link']} relative font-light text-base  active:text-orangep-500`}
                                    onClick={handleScroll({
                                        action: isMobile ? handleClick : () => {},
                                    })}
                                    href='/#work'
                                >
                                    Work
                                </a>
                            </li>
                            <li className='flex items-center justify-center relative'>
                                <a
                                    className={`${styles['nav-link']} relative font-light text-base active:text-orangep-500`}
                                    onClick={handleScroll({
                                        action: isMobile ? handleClick : () => {},
                                    })}
                                    href='/#contact'
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <ul
                            className={`${
                                isOpen && isMobile
                                    ? navbarMobile.socialOpen.join(' ')
                                    : navbarMobile.socialClosed.join(' ')
                            } transition-opacity duration-400 ease-out lg:hidden`}
                        >
                            <li className=''>
                                <a
                                    href='https://www.linkedin.com/in/bryanstgarcia/'
                                    onClick={
                                        isMobile
                                            ? handleRedirect({
                                                action: handleClick,
                                            })
                                            : null
                                    }
                                    className={styles['nav-social-logo']}
                                    aria-label='My LinkedIn profile'
                                >
                                    <LinkedinLogo color='#F37B37' />
                                </a>
                            </li>
                            <li className=''>
                                <a
                                    href='https://github.com/bryanstgarcia'
                                    onClick={
                                        isMobile
                                            ? handleRedirect({
                                                action: handleClick,
                                            })
                                            : null
                                    }
                                    className={styles['nav-social-logo']}
                                    aria-label='My Github profile'
                                >
                                    <GithubLogo color='#F37B37' />
                                </a>
                            </li>
                            <li className=''>
                                <a
                                    href='mailto:bryanstgarcia@hotmail.com'
                                    className={styles['nav-social-logo']}
                                    aria-label='My email'
                                    onClick={
                                        isMobile
                                            ? handleRedirect({
                                                action: handleClick,
                                            })
                                            : null
                                    }
                                >
                                    <MailLogo color='#F37B37' />
                                </a>
                            </li>
                        </ul>
                        <div
                            className={`${
                                isOpen && isMobile
                                    ? navbarMobile.logoOpen.join(' ')
                                    : navbarMobile.logoClosed.join(' ')
                            } transition-opacity duration-400 ease-out lg:hidden`}
                        >
                            <div
                                className={` ${styles['nav-logo-tiny']} place-self-center text-sm font-bold text-center flex items-center justify-center gap-1`}
                            >
                                <Asterisk />
                                BG.
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
