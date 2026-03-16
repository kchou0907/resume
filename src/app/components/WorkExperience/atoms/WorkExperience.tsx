import React from "react";
import globalResumeStyles from "../../../styles/Resume.module.css";

interface BaseWorkExperienceProps {
    companyName: string;
    roleName: string;
    startMonth: string;
    startYear: string;
    location: string;
    highlights: string[];
}

type WorkExperienceProps = BaseWorkExperienceProps & (
    | {
        isCurrentPosition: true;
        endMonth?: never;
        endYear?: never;
    }
    | {
        isCurrentPosition?: false;
        endMonth: string;
        endYear: string;
    }
);

const WorkExperience: React.FC<WorkExperienceProps> = (props) => {
    const {
        companyName,
        roleName,
        startMonth,
        startYear,
        location,
        highlights,
    } = props;

    const endDate = props.isCurrentPosition
        ? "Present"
        : `${props.endMonth} ${props.endYear}`;

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
                    <div>{startMonth} {startYear} - {endDate}</div>
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
