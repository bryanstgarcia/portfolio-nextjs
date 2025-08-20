import { Skill } from './Skill/Skill';
import { SkillSet } from './SkillSet/SkillSet';


export function generateSkillsComponent(skills) {
    const skillsComponents = [];
    for (let skill in skills) {
        skillsComponents.push(
            <SkillSet key={crypto.randomUUID()} title={skill}>
                {skills[skill].map((skillData) => (
                    <Skill key={crypto.randomUUID()} skill={skillData} />
                ))}
            </SkillSet>
        );
    }
    return skillsComponents;
}

export const skills = {
    'Front end': [
        {
            name: 'React',
            imagePath: '/svg/react.svg',
            imageAlt: 'React logo',
            width: 40,
            height: 40
        },
        {
            name: 'TypeScript',
            imagePath: '/svg/typescript.svg',
            imageAlt: 'TypeScript logo',
            width: 40,
            height: 40
        },
        {
            name: 'JavaScript',
            imagePath: '/svg/javascript.svg',
            imageAlt: 'JavaScript logo',
            width: 40,
            height: 40
        },
        {
            name: 'HTML',
            imagePath: '/svg/html.svg',
            imageAlt: 'HTML 5 logo',
            width: 40,
            height: 40
        },
        {
            name: 'CSS',
            imagePath: '/svg/css.svg',
            imageAlt: 'CSS 3 logo',
            width: 40,
            height: 40
        },
        {
            name: 'Tailwind',
            imagePath: '/svg/tailwind.svg',
            imageAlt: 'Tailwind logo',
            width: 40,
            height: 40
        },
        {
            name: 'GraphQL',
            imagePath: '/svg/graphql.svg',
            imageAlt: 'GraphQL logo',
            width: 40,
            height: 40
        },
        {
            name: 'Webpack',
            imagePath: '/svg/webpack.svg',
            imageAlt: 'Webpack logo',
            width: 40,
            height: 40
        },
        {
            name: 'Vite',
            imagePath: '/svg/vite.svg',
            imageAlt: 'Vite logo',
            width: 40,
            height: 40
        },
    ],
    'Back end': [
        {
            name: 'Python',
            imagePath: '/svg/python.svg',
            imageAlt: 'Python logo',
            width: 40,
            height: 40
        },
        {
            name: 'Flask',
            imagePath: '/svg/flask.svg',
            imageAlt: 'Flask logo',
            width: 40,
            height: 40
        },
        {
            name: 'Django',
            imagePath: '/svg/django.svg',
            imageAlt: 'Django logo',
            width: 40,
            height: 40
        },
        {
            name: 'MySQL',
            imagePath: '/svg/mysql.svg',
            imageAlt: 'MySQL logo',
            width: 40,
            height: 40
        },
        {
            name: 'PostgreSQL',
            imagePath: '/svg/postgresql.svg',
            imageAlt: 'PostgreSQL logo',
            width: 40,
            height: 40
        },
        {
            name: 'SQLAlchemy',
            imagePath: '/svg/sqlalchemy.svg',
            imageAlt: 'SQLAlchemy logo',
            width: 40,
            height: 40
        },
        {
            name: 'SQL',
            imagePath: '/svg/sql.svg',
            imageAlt: 'SQL logo',
            width: 40,
            height: 40
        },
        {
            name: 'Docker',
            imagePath: '/svg/docker.svg',
            imageAlt: 'Docker logo',
            width: 40,
            height: 40
        },
        {
            name: 'AWS',
            imagePath: '/svg/aws.svg',
            imageAlt: 'AWS logo',
            width: 40,
            height: 40
        },
    ],
    'Others': [
        {
            name: 'Git',
            imagePath: '/svg/git.svg',
            imageAlt: 'Git logo',
            width: 40,
            height: 40
        },
        {
            name: 'Github',
            imagePath: '/svg/github.svg',
            imageAlt: 'Github logo',
            width: 40,
            height: 40
        },
        {
            name: 'Gitlab',
            imagePath: '/svg/gitlab.svg',
            imageAlt: 'Gitlab logo',
            width: 40,
            height: 40
        },
        {
            name: 'Figma',
            imagePath: '/svg/figma.svg',
            imageAlt: 'Figma logo',
            width: 40,
            height: 40
        },
        {
            name: 'NGINX',
            imagePath: '/svg/nginx.svg',
            imageAlt: 'NGINX logo',
            width: 40,
            height: 40
        },
        {
            name: 'Jest',
            imagePath: '/svg/jest.svg',
            imageAlt: 'Jest logo',
            width: 40,
            height: 40
        },
        {
            name: 'Postman',
            imagePath: '/svg/postman.svg',
            imageAlt: 'Postman logo',
            width: 40,
            height: 40
        },
        {
            name: 'SCRUM',
            imagePath: '/svg/scrum.svg',
            imageAlt: 'SCRUM logo',
            width: 40,
            height: 40
        },
        {
            name: 'Jira',
            imagePath: '/svg/jira.svg',
            imageAlt: 'Jira logo',
            width: 40,
            height: 40
        },
    ]
}