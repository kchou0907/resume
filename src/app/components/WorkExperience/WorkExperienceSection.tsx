import React from "react";
import globalResumeStyles from "../../styles/Resume.module.css";
import Meta from "./components/Meta";
import SectionTitle from "../atoms/SectionTitle";

const WorkExperienceSection: React.FC = () => {
    return (
        <div className={globalResumeStyles.section}>
            <SectionTitle title="Work Experience"/>

            <div>
                <Meta/>
            </div>
        </div>
    )
}

export default WorkExperienceSection