import { skills, generateSkillsComponent } from "./skills.utils";
import { Container } from "@app/components/shared/Container/Container";

export function Skills() {
    return (
        <Container
            id="skills"
            type="section"
            background="bg-whitep-500"
            className="bg-whitep-500 p-5 px-4 lg:p-5 lg:px-10 text-blackp-500 flex flex-col gap-10 "
        >
            <h2 className="text-lg lg:text-3xl font-bold">Skills</h2>
            <div className="flex justify-start  items-center lg:justify-between gap-10 lg:gap-3 flex-col lg:flex-row pb-5">
                {generateSkillsComponent(skills)}
            </div>
        </Container>
    );
}
