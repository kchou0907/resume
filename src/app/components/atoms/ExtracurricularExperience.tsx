import React from "react";
import globalResumeStyles from "../../styles/Resume.module.css";

interface ExtracurricularExperienceProps {
    activityName: string;
    roleName: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    highlights: string[];
}

const ExtracurricularExperience: React.FC<ExtracurricularExperienceProps> = ({
    activityName,
    roleName,
    startMonth,
    startYear,
    endMonth,
    endYear,
    highlights
}) => {

    const highlightedExperience = highlights.map((description) => {
        return (
            <li className={globalResumeStyles.listItem}>
                {description}
            </li>
        )
    })
    return (
        <div className={globalResumeStyles.subsection}>
            <div>
                <div className={globalResumeStyles.row}>
                    <div>

                        <span className={globalResumeStyles.subsectionTitle}>
                            {activityName + " "}
                        </span>
                        -
                        <span className={globalResumeStyles.italic}>
                            {" " + roleName}
                        </span>

                    </div>
                    <div>{startMonth} {startYear} - {endMonth} {endYear}</div>
                </div>
            </div>
            <ul className={globalResumeStyles.list}>
                {highlightedExperience}
            </ul>
        </div>
    )
}

export default ExtracurricularExperience