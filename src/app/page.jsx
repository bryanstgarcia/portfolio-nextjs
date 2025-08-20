import React from 'react';

import { Hero } from '@app/components/Home/Hero';
import { About } from '@app/components/Home/About';
import { ProjectsCounter } from '@app/components/Home/ProjectsCounter';
import { Skills } from '@app/components/Home/Skills';
import { Projects } from '@app/components/Home/Projects';
import { Contact } from '@app/components/Home/Contact';
import { Brands } from '@app/components/Home/Brands';

export default function Home () {
    return (
        <React.Fragment>
            <main className='pt-18'>
                <Hero />
                <About />
                <ProjectsCounter />
                <Skills />
                <Projects />
                <Brands />
            </main>
            <Contact />
        </React.Fragment>
    )
}
