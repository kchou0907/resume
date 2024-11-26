import React from "react";
import globalResumeStyles from "../../styles/Resume.module.css";
import Dubhacks from "./atoms/Dubhacks";
import SectionTitle from "../atoms/SectionTitle";

const LeadershipExperience: React.FC = () => {
    return (
        <div className={globalResumeStyles.section}>
            <SectionTitle title="Leadership Experience"/>
            <Dubhacks />
        </div>
    )
}

export default LeadershipExperience