import React from "react";
import globalResumeStyles from "../../styles/Resume.module.css"

const Education: React.FC = () => {
    return (
        <div className={globalResumeStyles.section}>
            <div className={globalResumeStyles.sectionWrapper}>
                <div className={globalResumeStyles.sectionTitle}>Education:</div>
            </div>
            <div className={globalResumeStyles.subsection}>
                <div className={`${globalResumeStyles.row}`}>
                    <span>
                        University of Washington, Seattle – Information School
                    </span>

                    <span>
                        June 2022
                    </span>

                </div>
                <div className={globalResumeStyles.row}>
                    <span>
                        Bachelor of Science in Informatics
                    </span>
                    <span>
                        GPA: 3.58
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Education