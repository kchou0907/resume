import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";

const Spotty: React.FC = () => {
    const highlights: string[] = [
        `Built a full-stack web app enabling users to access 
        crowdsourced reviews of public restrooms`,
        `Developed a responsive map and location list with React, backed by 
        Node.js, Express.js, and Firebase`,
        `Partnered with product, data, and design leads to deliver features 
        that enhanced engagement and accessibility`
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