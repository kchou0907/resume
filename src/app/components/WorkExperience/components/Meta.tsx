import React from "react";
import WorkExperience from "../atoms/WorkExperience";

const Meta: React.FC = () => {
    const highlightedExperiences: string[] = [
        `Architected and deployed a reconfigurable maintenance window for a 
        Kubernetes-backed JupyterHub platform on AWS, improving data 
        sanitization workflows using JavaScript and Docker`,
        `Implemented rate limiting and query budgeting for an API product using 
        Hack (PHP), Python, and R`,
        `Led dogfooding efforts for a Git extension by implementing error 
        handling, resolving critical bugs, and creating comprehensive user 
        documentation. Leveraged Docker, Kubernetes, AWS Lambda, S3, 
        and API Gateway`,
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