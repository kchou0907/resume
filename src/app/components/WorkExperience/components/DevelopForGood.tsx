import React from "react"
import WorkExperience from "../atoms/WorkExperience"

const DevelopForGood: React.FC = () => {
    const highlightedExperiences: string[] = [
        `Served as main point of contact between the team and our non-profit 
        client, CARE International`,
        `Coordinated between a globally distributed team to ensure timely 
        completion of project deliverables`,
        `Streamlined the front and back end of CARE's Community Sanitation 
        Support System by proactively identifying potential problems and 
        troubleshooting issues using HTML, CSS, PHP (Code Igniter)`,
        `Reduced onboarding time by 80% by creating onboarding docuemtnation and
         implementing code comments`,
    ];

    return (
        <WorkExperience
            companyName="Develop for Good"
            startMonth="Sept."
            startYear="2020"
            endMonth="Dec."
            endYear="2020"
            roleName="Project Manager"
            location="Remote"
            highlights={highlightedExperiences}
        />
    )
}

export default DevelopForGood