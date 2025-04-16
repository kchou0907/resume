import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";
import { SweExperienceBias } from "../../WorkExperience/interfaces/sweExperienceBias";
import { ResumeTypes } from "@/app/page";

const Dubhacks: React.FC<SweExperienceBias> = ({ bias = ResumeTypes.FULL }) => {
    let highlights: string[] = [
        `Spearheaded fundraising efforts, securing over $60,000 in sponsorships 
        by engaging with over 300 companies to support a flagship hackathon 
        event`,
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