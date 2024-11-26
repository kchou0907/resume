import React from "react";
import globalResumeStyles from "../../styles/Resume.module.css";
import PersonalFinance from "./atoms/PersonalFinance";
import SectionTitle from "../atoms/SectionTitle";
import Spotty from "./atoms/Spotty";

const Projects: React.FC = () => {
    return (
        <div className={globalResumeStyles.section}>
            <SectionTitle title="Projects"/>
            <PersonalFinance />
            <Spotty />
        </div>
    )
}

export default Projects