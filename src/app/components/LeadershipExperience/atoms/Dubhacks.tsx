import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";

const Dubhacks: React.FC = () => {
    const highlights: string[] = [
        `Raised over $60,000 by approaching over 300 companies to fund our 
        annual flagship hackathon`,
        `Wrote scripts to automate sending email reminders, updating to-do 
        lists, and keep track of sponsorship effots using Google Sheets and 
        Google Apps Script (Javascript)`,
        `Collaborated with event directors and 5+ cross-functional teams in the 
        coordination and execution of the premier collegiate hackathon in the 
        Pacific Northwest, which attracted over 1000 participants`
    ]
    return (
        <ExtracurricularExperience
            activityName="DubHacks"
            roleName="Sponsorship Director"
            startMonth="Feb."
            startYear="2020"
            endMonth="Dec."
            endYear="2021"
            highlights={highlights}
        />
    )
}

export default Dubhacks