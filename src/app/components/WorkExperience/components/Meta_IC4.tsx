import React from "react";
import WorkExperience from "../atoms/WorkExperience";

const Meta_IC4: React.FC = () => {
  const highlightedExperiences: string[] = [
    `Led end-to-end development of Threads youth ads graduation system, launching age-based ad experiences to 650K+ users and enabling monetization for users transitioning to full ads eligibility`,
    `Drove phased global rollout (RoW + EU), achieving >99.9% gating correctness with no measurable regression in revenue or engagement metrics`,
    `Designed compliance systems for EU/UK predicted teens, enforcing stricter ad restrictions under GDPR/DSA`,
    `Built monitoring and validation infrastructure ensuring correct ad state transitions across FB, Instagram, and Threads; defined compliance metrics with data engineering for real-time anomaly detection`
  ];

  return (
    <WorkExperience
      companyName="Meta"
      startMonth="June."
      startYear="2025"
      isCurrentPosition={true}
      roleName="Software Engineer"
      location="Menlo Park, CA"
      highlights={highlightedExperiences}
    />
  );
};

export default Meta_IC4;
