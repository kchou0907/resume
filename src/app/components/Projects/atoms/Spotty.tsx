import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";

const Spotty: React.FC = () => {
    const highlights: string[] = [
        `Developed a full-stack web app enabling users to access 
        crowdsourced reviews of public restrooms`,
        `Designed and implemented a responsive map and location list in the 
        frontend using React, with a scalable backend powered by Node.js, 
        Express.js, and Firebase`,
        `Collaborated cross-functionally with a Product Manager, Data Lead, and 
        Design Lead to scope and deliver new features, improving user engagement 
        and accessibility`
    ]
    return (
        <ExtracurricularExperience
            activityName="Spotty"
            roleName="Tech Lead"
            startMonth="Dec."
            startYear="2021"
            endMonth="June"
            endYear="2022"
            highlights={highlights}
        />
    )
}

export default Spotty