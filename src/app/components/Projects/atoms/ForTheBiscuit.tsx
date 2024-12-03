import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";

const ForTheBiscuit: React.FC = () => {
    const highlights: string[] = [
        `Developed a web application that directs users to a random restaurant 
        while hiding restaurant details`,
        `Implemented front-end with CSS, HTML, and JavaScript; built 
        dockerized backend using Node.js, Express.js`,
        `Deployed on a self-hosted Linux server with dynamic DNS, 
        secured via Cloudflare, and optimized using Nginx`
    ]
    return (
        <ExtracurricularExperience
            activityName="For the Biscuit"
            roleName="Personal Project"
            startMonth="June"
            startYear="2020"
            endMonth="Aug."
            endYear="2022"
            highlights={highlights}
        />
    )
}

export default ForTheBiscuit