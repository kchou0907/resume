import React from "react";
import globalResumeStyles from "../styles/Resume.module.css";
import Header from "../components/Header/Header";
import Education from "../components/Education/Education";
import SkillSummary from "../components/SkillSummary/SkillSummary";
import WorkExperienceSection from "../components/WorkExperience/WorkExperienceSection";
import LeadershipExperience from "../components/LeadershipExperience/LeadershipExperience";
import Projects from "../components/Projects/Projects";

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

      <WorkExperienceSection />

      <Projects />

      <LeadershipExperience />

    </div>
  );
};

export default FullstackResume;
