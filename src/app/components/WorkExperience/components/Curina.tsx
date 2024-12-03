import React from "react"
import WorkExperience from "../atoms/WorkExperience"

const Curina: React.FC = () => {
    const highlightedExperiences: string[] = [
        `Migrated web services from Webflow to Shopify, established code 
        styling guide to streamline development`,
        `Led a complete website redesign, boosting conversion rates by 20% and 
        increasing the user base by 70%`,
        `Developed custom webpages and animations using JavaScript, HTML, CSS, 
        and Shopify's Liquid framework.`,
    ];

    return (
        <WorkExperience
            companyName="Curina"
            startMonth="June"
            startYear="2020"
            endMonth="Sept."
            endYear="2020"
            roleName="Web Developer Intern"
            location="Remote"
            highlights={highlightedExperiences}
        />
    )
}

export default Curina