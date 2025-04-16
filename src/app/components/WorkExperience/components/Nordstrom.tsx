import React from "react";
import WorkExperience from "../atoms/WorkExperience";

const Nordstrom: React.FC = () => {
    const highlightedExperiences: string[] = [
        `Implemented end-to-end testing for an enterprise-grade React web 
        application using Jest and Puppeteer. Improved bug detection by 13%, 
        accelerating issue identification, and increased CI/CD coverage by 15%`,
        `Led a cross-functional team to develop a prototype knowledge-sharing 
        chatbot, utilizing Flask and JavaScript`,
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