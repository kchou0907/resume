import React from "react";
import globalResumeStyles from "../styles/Resume.module.css";
import Header from "../components/Header/Header";
import Education from "../components/Education/Education";
import SkillSummary from "../components/SkillSummary/SkillSummary";
import SectionTitle from "../components/atoms/SectionTitle";
import Parthean from "../components/WorkExperience/components/Parthean";
import Meta from "../components/WorkExperience/components/Meta";
import Spotty from "../components/Projects/atoms/Spotty";
import Homelab from "../components/Projects/atoms/Homelab";
import Meta_IC4 from "../components/WorkExperience/components/Meta_IC4";

const FullstackResume: React.FC = () => {
  return (
    <div className={`${globalResumeStyles.resume}`}>
      <div>
        <Header />
      </div>

      <div>
        <Education />
      </div>

      <SkillSummary />

      <div className={globalResumeStyles.section}>
        <SectionTitle title="Work Experience" />

        <div>
          <Meta_IC4 />
          <Parthean />
          <Meta />
        </div>
      </div>

      <div className={globalResumeStyles.section}>
        <SectionTitle title="Projects" />
        <Homelab />
        <Spotty />
      </div>
    </div>
  );
};

export default FullstackResume;
