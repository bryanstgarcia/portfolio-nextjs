import { Carousel } from "./Carousel/Carousel";
import { Project } from "./Project/Project";
import { projects } from "./projects.utils";
import { Container } from "@app/components/shared/Container/Container";
export function Projects() {
    return (
        <Container
            id="work"
            type='section'
            background="bg-blackp-500"
            className="bg-blackp-500 py-5 lg:py-5 text-whitep-500 bg-darkp-500 flex flex-col gap-10 "
        >
            <Container type='h2' className="text-lg lg:text-3xl font-bold px-4 md:px-10">Projects</Container>
            <div className="flex justify-start  items-center gap-10 pb-5">
                <Carousel>
                    {
                        projects.map(project => (
                            <Project 
                                project={project} 
                                key={crypto.randomUUID()} 
                            />
                        ))
                    }
                </Carousel>
            </div>
        </Container>
    );
}
