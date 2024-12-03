import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";

const Dubhacks: React.FC = () => {
    const highlights: string[] = [
        `Spearheaded fundraising efforts, securing over $60,000 in sponsorships 
        by engaging with over 300 companies to support a flagship hackathon 
        event`,
        `Automated sponsorship operations by scripting email reminders, to-do 
        list updates, and sponsorship tracking in Google Sheets using Google 
        Apps Script (JavaScript)`,
        `Coordinated with event directors and 5+ cross-functional teams to host 
        an event with over 1,000 participants, ensuring smooth execution of 
        workshops, panels, and competitions`,
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