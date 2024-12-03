import React from "react";
import globalResumeStyles from "../../../styles/Resume.module.css";

interface WorkExperienceProps {
    companyName: string;
    roleName: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    location: string;
    highlights: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
    companyName,
    roleName,
    startMonth,
    startYear,
    endMonth,
    endYear,
    location,
    highlights,
}) => {

    const highlightedExperience = highlights.map((description, index) => {
        return (
            <div style={{display: "flex"}} key={`work-highlight-${index}`}>
                <span className={globalResumeStyles.bulletPoint}>-</span>
                <div>{description}</div>
            </div>
        )
    })
    return (
        <div className={globalResumeStyles.subsection}>
            <div>
                <div className={globalResumeStyles.row}>
                    <div className={globalResumeStyles.subsectionTitle}>{companyName}</div>
                    <div>{startMonth} {startYear} - {endMonth} {endYear}</div>
                </div>

                <div className={globalResumeStyles.row}>
                    <div className={globalResumeStyles.italic}>{roleName}</div>
                    <div className={globalResumeStyles.italic}>{location}</div>
                </div>
            </div>
            <ul className={globalResumeStyles.list}>
                {highlightedExperience}
            </ul>
        </div>
    )
}

export default WorkExperience