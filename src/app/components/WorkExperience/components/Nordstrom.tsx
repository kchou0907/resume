import React from "react";
import WorkExperience from "../atoms/WorkExperience";

const Nordstrom: React.FC = () => {
    const highlightedExperiences: string[] = [
        `Implemented end-to-end testing for an enterprise-grade React web 
        application using Jest and Puppeteer; sped up the debugging process by 
        13% and increased CI/CD pipeline coverage by 15%`,
        `Managed a team in the development of a prototype team knowledge 
        chatbot. Built using Flask and Javascript`,
    ];

    return (
        <WorkExperience
            companyName="Nordstrom"
            startMonth="June"
            startYear="2021"
            endMonth="Aug."
            endYear="2021"
            roleName="Software Engineering Intern"
            location="Remote"
            highlights={highlightedExperiences}
        />
    )
}

export default Nordstrom;