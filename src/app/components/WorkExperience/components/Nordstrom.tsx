import React from "react";
import WorkExperience from "../atoms/WorkExperience";

const Nordstrom: React.FC = () => {
    const highlightedExperiences: string[] = [
        `Implemented end-to-end testing for an enterprise-grade React web 
        application using Jest and Puppeteer; accelerating debugging by 
        13% and boosting CI/CD pipeline coverage by 15%`,
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