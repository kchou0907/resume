import React from "react"
import WorkExperience from "../atoms/WorkExperience"

const ASUW: React.FC = () => {
    const highlightedExperiences: string[] = [
        `Developed sites for other entites and maintained the main ASUW site 
        with PHP, CSS, Javascript, MySQL`,
        `Migrated ASUW's backend from Ubuntu 12 to 20, the front end from PHP 5 
        to 7, and the CMS from Wordpress 4.9 to 5.6 to improve reliability and 
        security`,
    ];

    return (
        <WorkExperience
            companyName={`Associated Students at the University of Washington 
                (ASUW)`}
            startMonth="Sept."
            startYear="2020"
            endMonth="June."
            endYear="2021"
            roleName="Webmaster"
            location="Seattle, WA"
            highlights={highlightedExperiences}
        />
    )
}

export default ASUW