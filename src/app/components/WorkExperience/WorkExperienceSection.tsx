import React from "react";
import globalResumeStyles from "../../styles/Resume.module.css";
import Meta from "./components/Meta";
import SectionTitle from "../atoms/SectionTitle";
import Parthean from "./components/Parthean";
import Nordstrom from "./components/Nordstrom";

const WorkExperienceSection: React.FC = () => {
    return (
        <div className={globalResumeStyles.section}>
            <SectionTitle title="Work Experience"/>

            <div>
                <Parthean />
                <Meta/>
                <Nordstrom />
            </div>
        </div>
    )
}

export default WorkExperienceSection