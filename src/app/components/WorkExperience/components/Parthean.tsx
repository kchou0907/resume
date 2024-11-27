import React from "react";
import WorkExperience from "../atoms/WorkExperience";

const Parthean: React.FC = () => {
    const highlightedExperiences: string[] = [
        `Owned the full lifecycle of feature development. Partnered with the 
        Head of Product to deliver features in rapid, one-week iteration cycles,
        driving user adoption and satisfaction`,
        `Led front-end code quality initiatives by establishing component 
        isolation best practices with React and CSS, improving reusability and 
        maintainability across a growing codebase`,
        `Architected and deployed a scalable, fault-tolerant payments 
        infrastructure using Go and GCP. Handled ~$3M ARR across 450 customers 
        with zero downtime during critical transactions`,
    ];

    return (
        <WorkExperience
            companyName="Parthean"
            startMonth="Sept."
            startYear="2023"
            endMonth="Nov."
            endYear="2024"
            roleName="Founding Software Engineer"
            location="New York, NY"
            highlights={highlightedExperiences}
        />
    )
}

export default Parthean;