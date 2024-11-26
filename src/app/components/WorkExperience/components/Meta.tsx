import React from "react";
import WorkExperience from "../atoms/WorkExperience";

const Meta: React.FC = () => {
    const highlightedExperiences: string[] = [
        `Designed, built, and deployed a reconfigurable maintenance window for a
        Kubernetes-backed, AWS-hosted JupyterHub data sanitization platform 
        using Javascript and Docker`,
        `Implemented rate limiting and query budgeting for an API product using 
        Hack (PHP), Python, and R`,
        `Drove dogfooding for a Git extension by implementing error handling, 
        fixing bugs, and creating user documentation. Utilized Python, Docker, 
        Kubernetes, AWS Lambda, AWS S3, and AWS API Gateway`,
    ];

    return (
        <WorkExperience
            companyName="Meta"
            startMonth="Aug."
            startYear="2022"
            endMonth="Apr."
            endYear="2023"
            roleName="Software Engineer"
            location="Seattle, WA"
            highlights={highlightedExperiences}
        />
    )
}

export default Meta;