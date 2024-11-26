import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";

const Spotty: React.FC = () => {
    const highlights: string[] = [
        `Web app that provides users access crowd sourced reviews, information, 
        and locations of public restrooms`,
        `Worked cross-functionally with PM, Data Lead, and Design Lead scope out
         new features to iterate efficiently`,
        `Implemented responsive Map and list of locations using React in the 
        front end, designed and implemented the backend using Node.js, 
        Express.js, Firebase`
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