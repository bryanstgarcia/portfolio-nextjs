'use client';

import { useDeviceType } from '@app/utils/hooks/deviceType';
import { useSeeMore } from './About.hooks';
import styles from './style.module.css';

export function About() {
    const { seeMore, toggle } = useSeeMore();
	const isMobile = useDeviceType()
	console.log('IsMobile: ', isMobile)
	console.log('seeMore: ', seeMore)
    return (
        <section id='about' className={`py-10 px-10 lg:py-20 lg:px-20 flex flex-col items-center bg-blackp-500`}>
            <div className={`${styles.about} ${seeMore ? styles.animate : ''}`}>
                <p
                    className={`text-center font-thin ${
                        styles[ !seeMore && isMobile ? 'about-hide-text' : '' ]
                    }`}
                >
                    Full stack developer with a focus on frontend development.{' '}
                    <strong>
                        I specialize in crafting seamless, user-friendly
                        interfaces
                    </strong>{' '}
                    while also understanding the backend processes that bring
                    them to life. My experience allows me to create
                    comprehensive digital solutions that drive business success.
                    I'm dedicated to continuous learning and ready to tackle
                    challenges that push the boundaries of what's possible,
                    contributing real value to your business
                </p>
				{
					isMobile ? (
						<button
							onClick={toggle}
							className='cursor-pointer'
							disabled={seeMore ? true : false}
						>
							{seeMore ? '' : 'See more...'}
						</button>
					) : null
				}
            </div>
        </section>
    );
}
