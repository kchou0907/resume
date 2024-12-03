import React from "react";
import globalResumeStyles from "../styles/Resume.module.css";
import Header from "../components/Header/Header";
import Education from "../components/Education/Education";
import SkillSummary from "../components/SkillSummary/SkillSummary";
import SectionTitle from "../components/atoms/SectionTitle";
import Parthean from "../components/WorkExperience/components/Parthean";
import Meta from "../components/WorkExperience/components/Meta";
import Nordstrom from "../components/WorkExperience/components/Nordstrom";
import Dubhacks from "../components/LeadershipExperience/atoms/Dubhacks";
import Homelab from "../components/Projects/atoms/Homelab";
import ForTheBiscuit from "../components/Projects/atoms/ForTheBiscuit";

const BackendResume: React.FC = () => {
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
          <Parthean />
          <Meta />
          <Nordstrom />
        </div>
      </div>

      <div className={globalResumeStyles.section}>
        <SectionTitle title="Projects" />
        <Homelab />
        <ForTheBiscuit />
      </div>

      <div className={globalResumeStyles.section}>
        <SectionTitle title="Leadership Experience" />
        <Dubhacks />
      </div>
    </div>
  );
};

export default BackendResume;
