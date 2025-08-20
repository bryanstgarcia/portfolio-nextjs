import { GithubSquareLogo } from '@app/components/shared/svg/GithubSquareLogo';
import { LinkedInSquareLogo } from '@app/components/shared/svg/LinkedInSquareLogo';
import { MailLogo } from '@app/components/shared/svg/MailLogo';

export const github = {
    name: 'Github',
    source: 'https://github.com/bryanstgarcia',
    desktopAvailable: true,
    rounded: false,
    image: {
        Icon: GithubSquareLogo,
        alt: 'Github contact',
    },
};
export const linkedin = {
    name: 'LinkedIn',
    source: 'https://linkedin.com/in/bryanstgarcia',
    desktopAvailable: true,
    rounded: true,
    image: {
        Icon: LinkedInSquareLogo,
        alt: 'LinkedIn contact',
    },
};
export const email = {
    name: 'Email',
    source: 'mailto:bryanstgarcia@hotmail.com',
    desktopAvailable: true,
    rounded: false,
    image: {
        Icon: MailLogo,
        alt: 'Email contact',
    },
};
