import React from "react";
import globalResumeStyles from "../../styles/Resume.module.css";
import SectionLine from "./SectionLine";

const SectionTitle: React.FC<{title: string}> = ({
    title
}) => {
    return (
        <div className={globalResumeStyles.sectionTitleWrapper}>
            <div className={globalResumeStyles.sectionTitle}>{title}</div>
            <SectionLine />
        </div>
    )
}

export default SectionTitle